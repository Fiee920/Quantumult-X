[rewrite_local]
^http[s]?:\/\/api.psy-1.com\/cosleep\/user\/info*.+$ url script-response-body psy-1.js
[mitm] 
hostname = *.psy-1.*
*******************************
Surge

[Script]
^http[s]?:\/\/api.psy-1.com\/cosleep\/user\/info*.+$ requires-body=1,max-size=0,script-path=psy-1.js

[MITM]
hostname = *.psy-1.*

*******************************/
var obj = JSON.parse($response.body);
obj.data.is_vip= 1;
obj.data.have_vip= 1;
obj.data.vip_expires= 1;
$done({body: JSON.stringify(obj)});
