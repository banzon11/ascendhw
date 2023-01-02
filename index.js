
const { Configuration, OpenAIApi } = require("openai");

const prompt=require("prompt-sync")({sigint:true}); 
require("dotenv").config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const input = prompt("What's the string you want to complete?: ");


const openai = new OpenAIApi(configuration);
openai.createCompletion({
  model: "babbage",
  prompt: input,
  max_tokens: 13,
  temperature: 0,
}).then(resp=>{

  let i=0

  while(i<resp.data.choices.length){
    console.log(resp.data.choices[i].text)
    i++;
  }
})

// axios({
//     method: 'post',
//     url: 'https://api.openai.com/v1/completions',
//     headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
//     data: {
//         "model": "text-davinci-003",
//         "prompt": input,
//         "max_tokens": 7,
//         "temperature": 0,
//         "top_p": 1,
//         "n": 1,
//         "stream": false,
//         "logprobs": null,
//         "stop": "\n"
//       }
//   }).then(resp => {
//     let i=0

//     while(i<resp.data.choices.length){
//       console.log(resp.data.choices[i].text)
//       i++;
//     }

// });