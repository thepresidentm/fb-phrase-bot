const { Configuration, OpenAIApi } = require("openai");
const keys = require('./keys');

const configuration = new Configuration({
  apiKey: keys.openAi.token
});

const openai = new OpenAIApi(configuration);
const prompt = '#Las acciones siempre te van a demostrar que las palabras no son nada.#Tal vez en otro momento de nuestras u otras vidas volvamos a encontrarnos para hacer lo que no pudimos hacer en esta…#No puedo verme amando a nadie más que a ti, para toda mi vida.#“En las buenas, malas, y en las peores, siempre juntos.”♥️#Sin importar el plan o donde estemos, eres tú quien hace de mis días los más hermosos.#Eres agua, no te agites. Eres tierra, no te seques. Eres cielo, no te nubles. Eres fuego, no te apagues.#Yo ya conocí a la persona que voy a tener tatuada en el alma toda la vida.#Yo soñaba con tener el mundo, y llegaste tu y… Ahora tengo el universo.#Hoy cumples un día más siendo el amor de mi vida.#"Hablar quita dudas, hablar sana."👽 ✨♥#Feliz porque pude verte hoy.#Que mi mamá sea eterna y la tuya mi suegra.#Siento que nunca te olvido, es más, te llevo hasta en las venas.#Ella dijo que sería mí cobija y mi abrigo en mis noches frías. Ahora dónde está que de frío me estoy muriendo.#“A veces hablo conmigo sobre ti.” ❤️‍🩹#Así nos veo🥺♥#Valorame porque en calzones me veo bien deliciosa#Te quiero conmigo, y si es para toda la vida, mejor.#- No tienes que quedarte si no quieres 🥺.  - Pero sí quiero ❤️‍🩹.#';

async function completar() {
    const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 130,
    });

    return response.data.choices[0].text;
}

module.exports = {
    completar
}