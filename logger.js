const fs = require('fs');
const usedFile = 'used.txt';
const allFile = 'all.txt';

const usedStream = fs.createWriteStream(usedFile, {
    flags: 'a'
});

const allStream = fs.createWriteStream(allFile, {
    flags: 'a'
});

function saveUsed(text){
    usedStream.write(text + '\n');
}

function saveAll(array){
    array.forEach(element => {
        allStream.write(element + '\n');
    });
}

module.exports = {
    saveAll,
    saveUsed
}