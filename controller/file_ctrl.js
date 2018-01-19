/**
 * @author : 忍把浮名换此生
 * @E-mail : 2295161275@qq.com
 * @create : 2018/1/19
 * @description : 文件上传
 */

var fs = require('fs');
var path = require('path');
var    formidable = require('formidable');
var util = require('util');
var fs = require('fs');
var path = require('path');
var setting = require('../config/setting.json');

/**
 * 上传
 * @param req
 * @param res
 */
exports.upload = function(req,res){
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    //如果需要临时文件保持原始文件扩展名，设置为true
    form.keepExtensions = true;
    //图片存储
    form.uploadDir = setting.image_rootUrl;
    /**
     * fields 表单中的其他属性
     * files  文件集合
     */
    form.parse(req, function(err, fields, files) {
        //这里由于 image_rootUrl 有5层，所以拆分之后的图片名字是【6】
        var name = files.file.path.split("\\")[6];
        /*
        * 如果想使用原来的文件名，可使用 name 属性获取
        * */
        // var realName = files.file.name;
        // name = realName;
        //图片完整路径
        var imagePath = setting.image_rootUrl + name;
        //将临时目录中的图片移动到图片存放目录下并重命名
        fs.rename(files.file.path,imagePath,function(err){
            if(err) {
                res.json({'success':false,'msg':err});
            }else{
                var viewUrl = setting.image_viewUrl+name;
                res.json({'success':true,'msg':'上传成功！','newPath':viewUrl});
            }
        });
    });
};