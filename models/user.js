const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },

    pic: {
        type: String,
        default: "https://res.cloudinary.com/yashashvi/image/upload/v1593681538/noimage_fgmrrg.jpg"
    },
    resetToken: String,
    expireToken: Date
})

mongoose.model("User", userSchema)