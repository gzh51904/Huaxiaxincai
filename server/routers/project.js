const express = require('express');

const Router = express.Router();
const {formatData} = require('../utils')

const {mongo:{find}} = require('../db');

//获取项目信息
Router.route('/').get(async (req,res)=>{
    let result;
    try{
        result = await find("items")
        result = formatData({data:result})
    }catch(err){
        result = formatData({code:250,data:err})
    }
    res.send(result);
})
module.exports = Router;