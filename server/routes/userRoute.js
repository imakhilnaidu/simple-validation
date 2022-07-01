const express = require("express");
const userModel = require("../models/userModel")

const router = express.Router();

router.post("/add-user", async (req, res) => {
    const user = new userModel(req.body);

    try {
        const saveUser = await user.save();
        res.status(201).json({
            status: "success",
            data: {
                saveUser
            }
        })
    
    } catch(err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }

});

router.post("/login", async (req, res) => {
    const user = await userModel.findOne({
        username: req.body.username,
        password: req.body.password
    })

    try {

        if(user !== null) {
            res.status(200).json({
                status: "success",
                data: {
                    user
                }
            })
        } else {
            res.status(404).json({
                status: "fail",
            })
        }
    
    } catch(err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }

}); 

router.get("/", async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch(err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
})

module.exports = router;