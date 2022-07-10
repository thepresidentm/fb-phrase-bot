const fb = require('./fb');
const ai = require('./gpt3');

ai.completar().then(function (data){
    let textos = data.split('#');
    textos.forEach(element =>{
        fb.post(element);
    })
})

