'use strict';
const Service = require('egg').Service;

class InfoService extends Service {
    async userInfo() {
        const { serverUrl } = this.config.egg;
        try {
            const { data } = await this.ctx.curl(`${serverUrl}/user`, {
                method: 'GET',
                data: {},
                dataType: 'json',
            });
            return data.payload;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = InfoService;
