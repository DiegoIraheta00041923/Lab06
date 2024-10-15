const {save, User} = require('../models/user.model');
const {getUsers} = require('../models/user.model');

const addNewUser = (name, lastname,email)=>{
    const newUser = new User(name,lastname,email);
    return save(newUser);
}

const AllUsers = ()=> {
    return getUsers();
}

module.exports ={
    addNewUser,
    AllUsers
}