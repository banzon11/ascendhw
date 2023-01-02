const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config()
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
openai.createFineTune({
  training_file: "file-OU7hS1p7zDYXgVwhgFQ3RWdp",
  model: "babbage",
}).then(resp=>{

    console.log(resp.data)
  })
