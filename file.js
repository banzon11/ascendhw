const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config()
const fs = require("fs");


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
openai.createFile(
  fs.createReadStream("training.jsonl"),
  "fine-tune"
).then(resp=>{

    console.log(resp.data)
  })