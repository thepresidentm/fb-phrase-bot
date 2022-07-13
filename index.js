const fb = require('./fb');
const ai = require('./gpt3');
const readlineSync = require('readline-sync');


// Falta validar token fb antes de gastar el credito de gpt3, try catchs y logear todas las compelticiones

function main (){

    // Con gpt 3
    ai.completar().then(function (data){
        let texto = data.split('#');
        preguntarFrase(texto);
    })

    // Sin gpt3 para no gastar credito
    // let texto = 'Las acciones siempre te van a demostrar que las palabras no son nada.#Tal vez en otro momento de nuestras u otras vidas volvamos a encontrarnos para hacer lo que no pudimos hacer en esta…#No puedo verme amando a nadie más que a ti, para toda mi vida.#“En las buenas, malas, y en las peores, siempre juntos.”♥️#Sin importar el plan o donde estemos, eres tú quien hace de mis días los más hermosos.';
    // texto = texto.split('#');
    // preguntarFrase(texto);
}

function preguntarFrase(array){
    let index = readlineSync.keyInSelect(array, 'Que frase se va a publicar?');
    let seleccionada = array[index]
    if(seleccionada == undefined){
        console.log('No se publico nada')
    }else{
        console.log(seleccionada);
        if(readlineSync.keyInYN('Quieres editar la frase?')){
            seleccionada = editar(seleccionada);
        }
        fb.post(seleccionada);
    }

    if(readlineSync.keyInYN('Quieres elegir otra frase?')){
        preguntarFrase(array);
    }
}

function editar(original){
    console.log(original);
    let nueva = readlineSync.prompt({ defaultInput: original })
    console.log(nueva)
    if(readlineSync.keyInYN('Estas seguro?')){
        return nueva;
    }else{
        return editar(nueva);
    }
}
fb.validarToken().then(result =>{
    result.status != 200 ? fracaso(result) : main();
});

function fracaso(input){
    console.log('Fracaso al login de fb');
    console.log(input.data.toString());
}

