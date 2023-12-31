/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！

脚本名称:哈哈哈
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/footprint-api.quthing.com\/vip\/state.+$ url script-response-body https://github.com/cgingxie/zuji.js
[mitm] 
hostname = *.quthing.*
*******************************
Surge

[Script]
^http[s]?:\/\/footprint-api.quthing.com\/vip\/state.+$ requires-body=1,max-size=0,script-path=quthing.js

[MITM]
hostname = *.quthing.*

*******************************/
var obj = JSON.parse($response.body);
    obj.data. validVip= true;
obj.data.vipType= 1;
obj.data.trialPeriod= true;
obj.data. expireTime= 4100335752,;
    $done({body: JSON.stringify(obj)});
