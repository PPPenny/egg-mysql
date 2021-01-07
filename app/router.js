'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.lists);
  router.get('/info', controller.info.info);
  router.get('/user', controller.user.info);
  router.post('/add',controller.userList.addUser);
  router.post('/delete',controller.userList.deleteUser);
  router.post('/updateUser',controller.userList.updateUser);
  router.get('/userList',controller.userList.list);
};
