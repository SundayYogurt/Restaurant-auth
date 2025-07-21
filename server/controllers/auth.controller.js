const db = require("../models/index.js")
const User = db.User;
const Role = db.Role;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const authController = {}

authController.signUp = async (req, res) => {
    const { username, name, email, password } = req.body;
    if (!username || !name || !email || !password) {
        res.status(400).send({ message: "Please provide all required fields" })
        return
    }
    await User.findOne({ where: { username } })//.select(-password)//
        .then((user) => {
            if (user) {
                res.status(400).send({ message: "Username is already existed" })
                return
            }
            const newUser = {
                username,
                name,
                email,
                password
            }
            User.create(newUser).then((user) => {
                //send role in req body admin
                if (req.body.roles) {
                    roles.findAll({
                        where: { name: { [Op.or]: req.body.roles } }
                    }).then((roles) => {
                        if(roles?.length === 0){
                            user.setRoles([1].then(()=>{
                                res.send({message: "User registered successfully3"})
                            }))
                        }else{
                            user.setRoles(roles).then(()=>{
                                res.send({ message: "User registered successfully1"})
                            })
                        }
                        User.setRoles(roles).then(() => {
                            res.send({ message: "User register successfully2" })
                        })
                    })
                } else {
                    user.setRoles([1].then(() => {
                        res.send({ message: "User registered successfully" })
                    }))
                } 
            }).catch((error) => {
                res.status(500).send({ message: "Something wrong error while registered a new user" })
            })
        })
}

module.exports = authController