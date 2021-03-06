/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1587551114831_5572';

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.egg = {
    serverUrl: 'http://39.100.141.76:3000/mock/858/egg',
  };

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ['*'],
  };
  exports.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/dbtest', // 你的数据库地址，egg_article是你数据库得名字
      options: {
        useNewUrlParser: true,
      },
    },
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  config.mysql = {
    client:{
      host:'localhost',
      port:'3306',
      user:'root',
      password:'qwer1234',
      database:'test'
    },
    app:true,
    agent:false
  }

  return {
    ...config,
    ...userConfig,
  };
};

