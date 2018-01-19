# file-server
基于Express的简易图片上传服务
# 使用
- 上传地址： http://localhost:3000/img/upload
- 上传格式： formData  file:[file] 
- 返回示例：
```
{
    "success": true,
    "msg": "上传成功！",
    "newPath": "http://localhost:3000/imgs/upload_e74d066b9fd20288ac59a0386e972ebf.png"
}
```
# 配置修改
```
// /config/setting.json
{
  // 本地图片存放位置
  "image_rootUrl":"F:/project/personal/file-server/public/imgs/",
  "image_viewUrl": "http://localhost:3000/imgs/"
}
```
# 运行
```
npm install
npm start
```
