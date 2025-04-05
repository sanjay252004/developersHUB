 
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const devuser = require('./devusermodel');
const middleware = require('./middleware');
const reviewmodel = require('./reviewmodel');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

mongoose.connect('mongodb+srv://sanju:12345@cluster0.xm1ks.mongodb.net/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Database Connected'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('working...');
});

// app.post('/register', async (req, res) => {
    
//     try {
//         const { fullname, email, mobile, skill, password, confirmpassword } = req.body;

//         if (!fullname || !email || !mobile || !skill || !password || !confirmpassword) {
//             return res.status(400).json({ msg: "All fields are required" });
//         }

//         const exist = await devuser.findOne({ email });
//         if (exist) {
//             return res.status(400).json({ msg: "User already registered" });
//         }

//         if (password !== confirmpassword) {
//             return res.status(400).json({ msg: "Passwords do not match" });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);
            
//         let newUser = new devuser({ 
//             fullname, email, mobile, skill, 
//             password: hashedPassword, 
//             confirmpassword: hashedPassword 
//         });

//         await newUser.save();console.log(res.json)
//         return res.status(201).json({ msg: "User registered successfully" });

//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({ msg: "Server Error" });
//     }
// });



app.post('/register', async (req, res) => {
    try {
        const { fullname, email, mobile, skill, password, confirmpassword } = req.body;

        if (!fullname || !email || !mobile || !skill || !password || !confirmpassword) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        const exist = await devuser.findOne({ email });
        if (exist) {
            return res.status(400).json({ msg: "User already registered" });
        }

        if (password !== confirmpassword) {
            return res.status(400).json({ msg: "Passwords do not match" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
            
        let newUser = new devuser({ 
            fullname, email, mobile, skill, 
            password: hashedPassword, 
            confirmpassword: hashedPassword 
        });

        await newUser.save();

        // ✅ Console log the registered user data
        console.log("New User Registered:", {
            fullname,
            email,
            mobile,
            skill
        });

        return res.status(201).json({ msg: "User registered successfully", user: newUser });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Server Error" });
    }
});


app.post('/login', async (req, res) => {
    console.log("hello")
    try {
        const { email, password } = req.body;
        console.log(email);
        const exist = await devuser.findOne({ email });

        if (!exist) {
            return res.status(400).json({ msg: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, exist.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid password" });
        }

        const payload = { user: { id: exist.id } };

        jwt.sign(payload, 'jwtPassword', { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;
            return res.json({
                token,
                user: {
                    _id: exist._id,
                    fullname: exist.fullname,
                    email: exist.email,
                    mobile: exist.mobile,
                    skill: exist.skill
                }
            });
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Server Error" });
    }
});

app.get('/allprofiles', middleware, async (req, res) => {
    try {
        let allprofiles = await devuser.find();
        return res.json(allprofiles);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Server Error" });
    }
});

app.get('/myprofile', middleware, async (req, res) => {
    try {
        let user = await devuser.findById(req.user.id);
        return res.json(user);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Server Error" });
    }
});

app.post('/addreview', middleware, async (req, res) => {
    try {
        console.log('add reviews',req.body)
        const { taskworker, rating } = req.body;
        const exist = await devuser.findById(req.user.id);
        const newReview = new reviewmodel({
            taskprovider: exist.fullname,
            taskworker, rating
        });
        newReview.save();
        return res.status(200).send('Review updated successfully');
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Server Error" });
    }
});

app.get('/myreview', middleware, async (req, res) => {
    try {
        // console.log('hi')
        let allreviews = await reviewmodel.find();
        
        let myreviews = allreviews.filter(review => review.taskworker.toString() === req.user.id.toString());
        // console.log(allreviews,myreviews)
        return res.json(myreviews);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Server Error" });
    }
});

app.listen(5001, () => console.log('Server running on port 5001'));
