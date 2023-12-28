/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

^https:\/\/footprint-api\.quthing\.com\/vip\/state 
url script-response-body 
lgzj.js

[mitm]

hostname = footprint-api.quthing.com

*************************************/

const path="/vip/state"
let obj= JSON.parse($response.body);
if ($request.url.indexof(path)!=1{
obj.data.uinfo["trialPeriod"] ="false";
obj.data.uinfo["vipType"] ="1";
obj.data.uinfo["validVip"] ="true";
obj.data.uinfo["expireTime"] ="4102372800000;
obj.data.uinfo["vipCount"] ="999999999";
}
$done({ body: JSON.stringify(obj) });
