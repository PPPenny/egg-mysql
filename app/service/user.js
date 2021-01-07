'use strict';
const Service = require('egg').Service;

class UserService extends Service {
    async user() {
        try {
            const res = await this.ctx.model.User.aggregate([{
                $project: {
                    age: 2,
                    name: -1,
                    _id: 0
                }
            }]);
            return res
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = UserService;
