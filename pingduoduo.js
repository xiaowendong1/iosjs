/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！

脚本名称:
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/api.pinduoduo.com\/api\/alexa\/cells\/hub\/v3.+$ url script-response-body https://raw.githubusercontent.com/xiaowendong1/iosjs/xiaowendong1/pingduoduo.js
[mitm] 
hostname =api.pinduoduo.com
*******************************
Surge

[Script]
^http[s]?:\/\/api.pinduoduo.com\/api\/alexa\/cells\/hub\/v3.+$ requires-body=1,max-size=0,script-path=pinduoduo.js

[MITM]
hostname = api.pinduoduo.com

*******************************/
var obj = JSON.parse($response.body);
    obj.data.goods_name=  "人屎尿屁 ";
    $done({body: JSON.stringify(obj)});
