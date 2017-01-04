'use strict'
var express		   = require('express');
var TestController = require('../controllers/TwitRequests');
var api            = express.Router();

api.get('/log/list',TestController.getLog);
api.get('/user/:userId', TestController.getUserInfo);


module.exports = api;