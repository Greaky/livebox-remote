'use strict';

var http = require("http");

var ip = '192.168.1.12';
var port = 8080;

module.exports.set = (req, res, next) => {
    var keycode = req.params.keycode;
    console.log(keycode);
    var option = {
        host : ip, 
        port : port,
        path : '/remoteControl/cmd?operation=01&key='+keycode+'&mode=0', 
        method : 'GET'
    };
    var tele = http.request(option);
            
    tele.end();
    tele.on('error', function(e) {
        console.error(e);
    });
    res.json(keycode);  
};


module.exports.channel = (req, res, next) => {
    var diff = 10-(req.params.keycode).length;
    var keycode = Array(diff+1).join("*")+req.params.keycode;
    
    var option = {
        host : ip, 
        port : port,
        path : '/remoteControl/cmd?operation=09&epg_id='+keycode+'&uui=1', 
        method : 'GET'
    };
    var tele = http.request(option);
    tele.end();
    tele.on('error', function(e) {
        console.error(e);
    });
    res.json(keycode);  
};
