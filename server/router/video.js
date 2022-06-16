const Router = require('koa-router'); 
const VideoController = require('../controller/video');

const router=Router({prefix:'/video'});
router.get('/directoryList',VideoController.directoryList);
router.get('/directoryDetail',VideoController.directoryDetail);
router.get('/directoryDetailOfCount',VideoController.directoryDetailOfCount);

module.exports=router;