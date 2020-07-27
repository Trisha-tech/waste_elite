const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const Post = mongoose.model("Post")
const Contact = mongoose.model("Contact")
const Suggestion = mongoose.model("Suggestion")
const crypto = require('crypto')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/keys')
const requireLogin = require('../middleware/requireLogin')
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
const { SENDGRID_API, EMAIL } = require('../config/keys')



const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: SENDGRID_API
    }
}))

router.post('/signup', (req, res) => {
    const { name, email, password, mobile, address, pic } = req.body
    if (!email || !password || !name) {
        return res.status(422).json({ error: "please add all the fields" })
    }
    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "user already exists with that email" })
            }
            bcrypt.hash(password, 12)
                .then(hashedpassword => {
                    const user = new User({
                        email,
                        password: hashedpassword,
                        name,
                        mobile,
                        address,
                        pic
                    })

                    user.save()
                        .then(user => {
                            transporter.sendMail({
                                to: user.email,
                                from: "trisha2000sahu@gmail.com",
                                subject: "signup success",
                                html: "<h1>Welcome to WasteElite<br/>We are highly thankful to you.<br/><br/>Regards WasteElite</h1>"
                            })
                            res.json({ message: "saved successfully" })
                        })
                        .catch(err => {
                            console.log(err)
                        })
                })

        })
        .catch(err => {
            console.log(err)
        })
})

//contactus
router.post('/contact', (req, res) => {
    const { name, email, mobile, text } = req.body
    const contact = new Contact({
        email,
        name,
        mobile,
        text
    })
    contact.save()
        .then(contact => {
            transporter.sendMail({
                to: contact.email,
                from: "trisha2000sahu@gmail.com",
                subject: "Message Sent Successfully",
                html: "<h1>Thank you for contacting us.<br/>We will reply you soon.<br/><br/>Regards <strong>WasteElite</strong></h1>"
            })
            res.json({ message: "Successfully Sent" })
        })
        .catch(err => {
            console.log(err)
        })
})

//contactus
router.post('/', (req, res) => {
    const { name, email, text } = req.body
    const suggestion = new Suggestion({
        email,
        name,
        text
    })
    suggestion.save()
        .then(suggestion => {
            transporter.sendMail({
                to: suggestion.email,
                from: "trisha2000sahu@gmail.com",
                subject: "Suggestion Received",
                html: "<h1>Thank you for giving your valuable suggestion to us.<br/>Regards <strong>WasteElite</strong></h1>"
            })
            res.json({ message: "Successfully Sent" })
        })
        .catch(err => {
            console.log(err)
        })
})



router.post('/login', (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(422).json({ error: "please add email or password" })
    }
    User.findOne({ email: email })
        .then(savedUser => {
            if (!savedUser) {
                res.status(422).json({ error: "Invalid Email or password" })
            }
            bcrypt.compare(password, savedUser.password)
                .then(doMatch => {
                    if (doMatch) {
                        // res.json({message:"successfully signed in"})
                        const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET)
                        const { _id, name, email, mobile, address, pic } = savedUser
                        res.json({ token, user: { _id, name, email, mobile, address, pic } })
                    }
                    else {
                        res.status(422).json({ error: "Invalid Email or password" })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        })
})

router.post('/reset-password', (req, res) => {
    crypto.randomBytes(32, (err, buffer) => {
        if (err) {
            console.log(err)
        }
        const token = buffer.toString("hex")
        User.findOne({ email: req.body.email })
            .then(user => {
                if (!user) {
                    return res.status(422).json({ error: "User don't exist with that email" })
                }
                user.resetToken = token
                user.expireToken = Date.now() + 3600000
                user.save().then((result) => {
                    transporter.sendMail({
                        to: user.email,
                        from: "trisha2000sahu@gmail.com",
                        subject: "password-reset",
                        html: `
                <p>You requested for password reset</p>
                <h5>Click on this <a href="${EMAIL}/reset/${token}">link</a> to reset password<br/><br/>Regards WasteElite</h5>
                `
                    })
                    res.json({ message: "Check your email" })
                })
            })
    })
})

router.post('/new-password', (req, res) => {
    const newPassword = req.body.password
    const sentToken = req.body.token
    User.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
        .then(user => {
            if (!user) {
                return res.status(422).json({ error: "Try again session expired" })
            }
            bcrypt.hash(newPassword, 12).then(hashedpassword => {
                user.password = hashedpassword
                user.resetToken = undefined
                user.expireToken = undefined
                user.save().then(user => {
                    transporter.sendMail({
                        to: user.email,
                        from: "trisha2000sahu@gmail.com",
                        subject: "password reseting success",
                        html: "<h1>Your password is successfully changed.<br/>Regards WasteElite</h1>"
                    })
                    res.json({ message: "Password updated successfully" })
                })
            })
        }).catch(err => {
            console.log(err)
        })
})
module.exports = router