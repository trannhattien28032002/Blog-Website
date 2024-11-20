import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import bcrypt from 'bcryptjs';

const server = express();
let PORT = 3000;

server.use(express.json());

mongoose.connect(process.env.DB_LOCATION, {
    autoIndex: true
})

server.post("/signup", (req, res) => {
    let {fullname, email, password } = req.body;

    // validating the date from frontend
    if (fullname.length < 3) {
        return res.status(403).json({ "error": "Fullname must be at least 3 letters long" })
    }

    if (!email.length) {
        return res.status(403).json({ "error": "Enter Email" })
    }

    if (!emailRegex.test(email)) {
        return res.status(403).json({ "error": "Email is invalid" })
    }

    if (!passwordRegex.test(password)) {
        return res.status(403).json({ "error": "Password should be 6 to 20 characters long with a numeric, 1 lowercase and 1 uppercase letters" })
    }

    bcrypt.hash(password, 10, (err, hashed_password) => {
        console.log(hashed_password);
    })

    return res.status(200).json({ "status": "okay" })
})

server.listen(PORT, () => {
    console.log('listening on port => ' + PORT);
})