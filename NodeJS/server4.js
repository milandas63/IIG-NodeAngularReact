console.log(__dirname);
console.log(__filename);

var wait = 2;
var inter = setInterval(function() {
    console.log("Time interval is set to " + wait + " seconds");
    wait += 2;
    if(wait>10) {
        clearInterval(inter);
    }
}, 2000);
