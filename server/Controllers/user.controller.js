const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")




// Testing connection
module.exports.apiTest = (req, res) => {
    res.json({ message: "successfull wooot woooot!" })
}