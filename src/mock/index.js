const Mock = require('mockjs');
//格式： Mock.mock( url, post/get , 返回的数据)；
//Mock.mock('/user/aa', 'get', require('./json/aa'));
Mock.mock('/home/bb', 'get', require('./json/bb'));