(function() {
    'use strict';

    var pm2 = require('pm2');
    var path = require('path');

    pm2.connect(true, function(err) {
       if (err) {
           console.log(err);
           process.exit(2);
       }

       pm2.start({
           name: 'trudesk',
           script: 'app.js',
           output: path.join(__dirname, '/logs/output.log'),
           error: path.join(__dirname, '/logs/output.log')
       }, function(err) {
           pm2.disconnect();
           if (err) throw err;
       });
    });
})();