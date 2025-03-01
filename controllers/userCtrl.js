const Users = require('../models/userModel')
const bcrypt = require('bcryptjs');
const { response } = require('express');
//@desc GET all txns
//@endpoint GET /api/v1/users
//@access Public

exports.getUsers = async (req , res , next) => {
  try {
    const users = await Users.find();
    return res.status(200).json({
        success: true,
        count: users.length,
        data: users
    });
} catch (error) {
    res.status(500).json({
        success: false,
        error: 'Server Error'
    });
}
}

//@desc ADD
//@endpoint POST /api/v1/users
//@access Public

exports.addUser = async (req , res , next) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password , 10)
    user = await Users.create(req.body);
    return res.status(201).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}

//@desc LOGIN
//@endpoint POST /api/v1/users/:id
//@access Public
exports.login = async (req , res , next) => {
  try{
    const user = await Users.findOne({username: req.body.username}).exec()
    if (!user){
      window.alert('This user does not exist')
      return res.status(400).send({message: 'This user does not exist'})
    }
    if (!bcrypt.compareSync(req.body.password , user.password)){
      window.alert('Password is invalid')
      return res.status(400).send({message: 'Password is invalid'})
    }
    res.status(200).json({
      success: true,
      data: user
    })
  } catch (error){
    res.status(500).send(error)
  }
}