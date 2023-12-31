/*******************************
  脚本作者：xiaowendong1


脚本名称：灵敢足迹vip获取
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️

*******************************
[rewrite_local]

^https:\/\/footprint-api\.quthing\.com\/vip\/state url script-response-body https://raw.githubusercontent.com/xiaowendong1/iosjs/xiaowendong1/zuji.js
[mitm] 

hostname = footprint-api.quthing.com
*******************************
Surge

[Script]
^http[s]?:\/\/footprint-api.quthing.com\/vip\/state.+$ requires-body=1,max-size=0,script-path=quthing.js

mitm]

hostname = footprint-api.quthing.com
*******************************/

var body = JSON.parse($response.body);
    body.data. validVip= true;
body.data.vipType= 7;
body.data.trialPeriod= false;
body.data. expireTime= 4100335752,;
    $done({body: JSON.stringify(body)});