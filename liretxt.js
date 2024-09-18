const fs = require('fs');
// Lire le fichier hello.txt
fs.readFile('./welcome.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});