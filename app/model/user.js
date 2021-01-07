'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const UserSchema = new Schema({
        name: {
            type: String,
            required: true,
        },
        id: {
            type: Schema.ObjectId,
            ref: 'Tags',
            required: true,
        },
        age: {
            type: Number,
            required: true,
        }
    }, 
    { versionKey: false } //document文档默认最后会有一个字段"__v"，这个字段表示该文档是否是刚刚创建的，如果是则字段"__v"的值为0
    );
    return mongoose.model('User', UserSchema, 'member');

}