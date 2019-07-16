const express = require('express');

const Router = express.Router();

const {mongo:{find}} = require('../db');
const {formatData,token} = require('../utils')

Router.get('/',async (req,res)=>{
    let {phone,password} = req.query;
    console.log(phone,password)

    let result = await find('users',{phone,password});
    console.log(result)

    if(result.length>0){
        // 生成token，并返回客户端
        let Athorization = token.create(phone);
        // res.set('Athorization', Athorization);
        res.send(formatData({data:Athorization}))
    }else{
        res.send(formatData({code:250}))
    }
})

module.exports = Router;