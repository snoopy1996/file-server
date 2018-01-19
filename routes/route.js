/**
 * @author : 忍把浮名换此生
 * @E-mail : 2295161275@qq.com
 * @create : 2018/1/19
 * @description :
 */
var express = require('express');
var router = express.Router();
var file_ctrl = require('../controller/file_ctrl');
/**上传文件*/
router.post('/upload',file_ctrl.upload);
module.exports = router;
