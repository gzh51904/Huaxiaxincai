const express = require('express');

const Router = express.Router();
const {
    formatData
} = require('../utils')

const {
    mongo: {
        find
    }
} = require('../db');

//获取项目信息
Router.route('/').get(async (req, res) => {
    let result;
    try {
        result = await find("items")
        result = formatData({
            data: result
        })
    } catch (err) {
        result = formatData({
            code: 250,
            data: err
        })
    }
    res.send(result);
});

// 查找单个项目
Router.route('/:id').get(async (req, res) => {
        // 动态路由: 参数id会被express格式化到req.params
        let {
            id
        } = req.params;
        console.log('params:', req.params)
        let _id = id * 1;
        console.log('"id" :', _id)
        let result;
        try {
            result = await find("items", {
                "id": _id
            })
            result = formatData({
                data: result
            })
            console.log(result)
        } catch (err) {
            result = formatData({
                code: 250,
                data: err
            })
        }
        console.log(result)
        res.send(result);

    })
    //删除单个项目
    .delete(async (req, res) => {
        let {
            id
        } = req.params;
        let _id = id * 1;
        let result;
        try {
            result = await this.delete("items", {
                "id": _id
            })
            result = formatData({
                data: result
            })
            console.log(result)
        } catch (err) {
            result = formatData({
                code: 250,
                data: err
            })
        }
        console.log(result)
        res.send(result);
    })
    // 修改项目
    .put(async (req, res) => { //req.body=>{price,size,nmae}

        let {
            id
        } = req.params;
        let _id = id * 1;
        let data = {};

        // 遍历修改属性，并写入查询
        for (let key in req.body) {
            data[key] = req.body[key];
        }

        let result;
        try {
            result = await update("items", {
                "id": _id
            }, data);
            result = formatData({
                data: result
            })
        } catch (err) {
            result = formatData({
                code: 250,
                data: err
            })
        }
        res.send(result);
    })

module.exports = Router;