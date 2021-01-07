'use strict';

const Controller = require('egg').Controller;

class InfoController extends Controller {
    async info() {
        const ctx = this.ctx;
        const userInfo = await ctx.service.info.userInfo();
        await this.ctx.render('user/info.tpl', userInfo);
    }
}
module.exports = InfoController;
