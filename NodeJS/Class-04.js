var fs = require('fs');
fs.unlink('readwrite3.txt', function(err) {
    console.log('Deleted');
});
