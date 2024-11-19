import express from 'express';
import mongoose from 'mongoose';

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

    return res.status(200).json({ "status": "okay" })
})

server.listen(PORT, () => {
    console.log('listening on port => ' + PORT);
})