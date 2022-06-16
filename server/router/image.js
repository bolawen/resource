const Router = require('koa-router'); 
const ImageController = require('../controller/image');

const router=Router({prefix:'/image'});
router.get('/directoryList',ImageController.directoryList);
router.get('/directoryDetail',ImageController.directoryDetail);
router.get('/directoryDetailOfCount',ImageController.directoryDetailOfCount);
router.get('/directoryDetailOfList',ImageController.directoryDetailOfList);

module.exports=router;