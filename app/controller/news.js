'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
    async lists() {
        const datalist = {
            data: [
                { title: '我是测试数据1' },
                { title: '我是测试数据2' },
                { title: '我是测试数据3' },
                { title: '我是测试数据4' },
            ],
        };
        await this.ctx.render('news/list.tpl', datalist);
    }
}
module.exports = NewsController;
