'use strict';
const moment = require('moment');
//  格式化时间
exports.formateDate = (time, type) => moment(new Date(time)).format(type || 'YYYY-MM-DD');

// 检验数字
exports.regNum = (str)=>/\d/.test(str)