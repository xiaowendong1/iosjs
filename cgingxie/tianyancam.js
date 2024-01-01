/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
甜颜相机vip滤镜使用
脚本名称:甜颜相机vip滤镜使用
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/api.tianyancam.com\/v1\/filter\/overview url script-response-body https://raw.githubusercontent.com/xiaowendong1/iosjs/xiaowendong1/cgingxie/tianyancam.js
[mitm] 
hostname = api.tianyancam.com
*******************************
Surge

[Script]
^http[s]?:\/\/api.tianyancam.com\/v1\/filter\/overview requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/xiaowendong1/iosjs/xiaowendong1/cgingxie/tianyancam.js

[MITM]
hostname = api.tianyancam.com
*******************************/
var body = JSON.parse($response.body);
    body.vipType= "SHUTTER_ON";
body. vipContent= false;
body.subName= "";
    $done({body: JSON.stringify(body)});