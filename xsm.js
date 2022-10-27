var body=$response.body;
body = body.replace(/is_vip\":0/g,'is_vip":1');
body = body.replace(/"have_vip\":0/g,'"have_vip":1');
body = body.replace(/vip_expires\":0/g,'vip_expires":1');
$done(body);
