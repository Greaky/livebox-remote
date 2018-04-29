# livebox-remote


To find your Livebox TV local IP address, you can connect to your Livebox web interface [http://livebox](http://livebox), "Mes équipements connectés", "décodeur TV". You'll find the IP address. To test it, go to [http://your-tv-ip:8080/remoteControl/cmd?operation=10](http://your-tv-ip:8080/remoteControl/cmd?operation=10).

This command will display the current state of your TV box.

Example :
```
{ "result": { 
    "responseCode": "0", 
    "message": "ok", 
    "data": { 
        "activeStandbyState": "0", 
        "friendlyName": "décodeur TV 4", 
        "macAddress": "", 
        "osdContext": "LIVE", 
        "playedMediaContextId": "1", 
        "playedMediaId": "1290", 
        "playedMediaPosition": "NA", 
        "playedMediaState": "PLAY", 
        "playedMediaType": "LIVE", 
        "timeShiftingState": "0", 
        "wolSupport": "0" 
        } 
    } 
}
```


To install my web TV remote :

```
npm install

npm run start
```

Then go to [http://localhost:8888/](http://localhost:8888/)




![Image of remove tv](https://raw.githubusercontent.com/bbastou/livebox-remote/master/public/images/capture/1.png)
