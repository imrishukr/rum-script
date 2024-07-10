function initialize(appName, appVersion, apiKey) {
  
    let RUM = window.RUM;
    let faro = window.faro;

    faro = RUM.RumInit({
       app: {
          name: appName,
          version: appVersion,
       },
       traceLog: false,
       useSendBeacon: true,
       apiKey: apiKey,
       instrumentations: {
            documentload: true,  
            xhr: true,  
            fetch: true,
            webvitals: true,
            console: true,
            errors: true,
            interactions: true,
            navigation: true,
         },
    });   

}


function pause(){
    window.faro.pause();
}

function unPause(){
    window.faro.unpause();
}

function pushEvent(eventName, data) {   
    
    var faro = window.faro;
    faro.api.pushEvent(eventName, JSON.parse(data));
}

function pushLog(message, level) {   
    var faro = window.faro;
    faro.api.pushLog([message], JSON.parse(level));
}

function pushError(error, type) {
    var faro = window.faro;
    faro.api.pushError(error, {type: type});
}

function pushMeasurement(type, values) {
    var faro = window.faro;
   faro.api.pushMeasurement(type, JSON.parse(values));
}

function setUserDetails(userDetails) {
    var faro = window.faro;
    faro.api.setUser(JSON.parse(userDetails));
}

