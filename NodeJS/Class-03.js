var fs = require('fs');

//var text = fs.readFileSync("readwrite.txt","utf8");
//console.log(text);
//fs.writeFileSync("readwrite2.txt",text);

fs.readFile("app1.js", "utf8", function (err, data) {
    if(err) return fs.error(err);
    //console.log(data);

    fs.writeFile("readwrite3.txt", data, function (err) {
        console.log('Success!');
    });
});

