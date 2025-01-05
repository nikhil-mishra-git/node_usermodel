
// ==================== User Routes ==================

const express = require('express');
const router = express.Router();

//  Import Model

const User = require('./../models/userModel');



// ============== Post Method ====================

router.post('/',async(req,res)=>{
    try{

        const getUserData = req.body;
        const UserData = new User(getUserData);
        const setData = await UserData.save();

        console.log('UserData Saved Succefully');
        res.status(200).json(setData);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'})
    }
})

// ================== Get Method ====================

router.get('/',async(req,res)=>{
    try{

        const findUser = await User.find();
        console.log('UserData Find Succefully');
        res.status(200).json(findUser);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'})
    }
})

// ==================== Update User ===================

router.put('/:id',async(req,res)=>{
    try{

        const id = req.params.id;
        const fields = req.body;

        const updated = await User.findByIdAndUpdate(id,fields,{
            new:true,
            runValidators:true
        })

        if(!updated){
            return res.status(404).json({error:"User Not Found"})
        }

        console.log('UserData Updated Succefully');
        res.status(200).json(updated);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'})
    }
})

// ========================= Delete User ======================

router.delete('/:id',async(req,res)=>{
    try{

        const id = req.params.id;
        const UserDelete = await User.findByIdAndDelete(id);

        if(!UserDelete){
            return res.status(404).json({error:"User Not Found"})
        }

        console.log('User Delete Succefully');
        res.status(200).json(UserDelete);


    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'})
    }
})

module.exports = router;