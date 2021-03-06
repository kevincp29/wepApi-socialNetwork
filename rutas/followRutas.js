'use strict'
const express = require('express');
var FollowController = require('../controladores/followControlador');
var api = express.Router();
var md_auth = require('../middleWares/authenticate');

api.post('/follow', md_auth.ensureAuth, FollowController.saveFollow);
api.delete('/follow/:id',md_auth.ensureAuth, FollowController.deleteFollow);
api.get('/following/:id?/:page?', md_auth.ensureAuth, FollowController.getFollowingUsers);
api.get('/followed/:id?/:page?', md_auth.ensureAuth, FollowController.getFollowedUsers);
api.get('/getMyFollows/:followed?', md_auth.ensureAuth, FollowController.getMyFollows);
module.exports = api;

