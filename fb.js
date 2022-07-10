const urllib = require('urllib');
const replacer = require('./replacer');
const keys = require('./keys');

const fbUrl = 'https://graph.facebook.com/v14.0/' + keys.fb.page;
const fbToken = '&access_token=' + keys.fb.token;

function post(mensaje){
    let url = fbUrl + '/feed?message=%' + fbToken;
    mensaje = encodeURIComponent(mensaje);
    url = replacer.rp(url, [mensaje]);

    urllib.request(url, { method: 'POST', timeout: 10000 }).then(function (result){
        if(result.status != 200){
            console.log('No se realizo la publicacion');
            console.log(result.data.toString());
        }else{
            console.log("Publicacion exitosa");
        }
    });
}
module.exports = {
    post
}