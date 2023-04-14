const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function generateResponse(text){
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Apa itu arduino",
  temperature: 0.3,
  max_tokens: 3000,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,

});
    return response.data.choices[0].text;
}

async function main(){
    const result = await generateResponse("Apa itu arduino")
    console.log(result);
}
main();