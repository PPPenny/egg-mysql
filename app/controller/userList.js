'use strict';

const Controller = require('egg').Controller;

class ListController extends Controller {
 

    async addUser(){
        // 增加数据
        try{
            const params = this.ctx.request.body
            console.log(params)
            await this.app.mysql.insert('user',params)
            this.ctx.body = {
                code: 0,
                data: [],
                msg:'新增成功'
            };
        }catch(e){
            this.ctx.body = {
                code: 500,
                data: [],
                msg:'新增失败'
            };
        }
    }
    async deleteUser(){
        const params = this.ctx.request.body
        try{
            await this.app.mysql.delete('user',params)
            this.ctx.body = {
                code: 0,
                data: true
            };

        }catch(e){
            this.ctx.body = {
                code: 500,
                data: [],
                msg:'删除失败'
            };
        }
   
    }
    async updateUser(){
        const params = this.ctx.request.body
        await this.app.mysql.update('user',params)
        this.ctx.body = {
            code: 0,
            data: true
        };

    }

    async list() {
        // 查询数据
        const {name} = this.ctx.query;
        let userList
        if(name){
            let sql = `select * from user where name like "%${name}%" `
            userList = await this.app.mysql.query(sql)
        }else{
            // 查询所有数据，返回整张表数据
            userList = await this.app.mysql.select("user")
        }
        this.ctx.body = {
            code: 0,
            data: userList
        };
    }
}

module.exports = ListController;
