'use strict';

const Controller = require('egg').Controller;

class InfoController extends Controller {
    async info() {
        const ctx = this.ctx;
        const userInfo = await ctx.service.user.user()
        ctx.body = {
            code: 0,
            data: userInfo,
        };
    }
}
module.exports = InfoController;
