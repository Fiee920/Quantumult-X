/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
酷安用户名
脚本名称:酷安用户名
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/api.coolapk.com\/v6\/user\/profile.+$ url script-response-body coolapk.js
[mitm] 
hostname = *.coolapk.*
*******************************
Surge

[Script]
^http[s]?:\/\/api.coolapk.com\/v6\/user\/profile.+$ requires-body=1,max-size=0,script-path=coolapk.js

[MITM]
hostname = *.coolapk.*

*******************************/
var obj = JSON.parse($response.body);
    obj.level= 99;
obj.experience= 999999999;
obj.next_level_experience= 999999999;
obj.username= "Admin;
obj.displayUsername= "Admin;
obj.feed= 9999;
obj.follow= 0;
obj.fans= 99999;
    $done({body: JSON.stringify(obj)});
