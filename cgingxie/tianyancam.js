/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
酷匠阅读
脚本名称:酷匠阅读
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/app.kujiang.com\/v1\/user\/user_info.+$ url script-response-body kujiang.js
[mitm] 
hostname = *.kujiang.*
*******************************
Surge

[Script]
^http[s]?:\/\/app.kujiang.com\/v1\/user\/user_info.+$ requires-body=1,max-size=0,script-path=kujiang.js

[MITM]
hostname = *.kujiang.*

*******************************/
var obj = JSON.parse($response.body);
    obj.data. is_set_feature = true;
obj.data. pay_level = 1;
obj.data. is_member = 1;
obj.data.super = 1;
obj.data.  is_show_receive_member_reminder = true;
    $done({body: JSON.stringify(obj)});
