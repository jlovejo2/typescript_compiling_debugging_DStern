import express from 'express';
// import * as _ from 'lodash';
import { Question } from '../@types/Question';
import path from "path";

const questions: Question[] = [
  {
    title: 'How to log in?',
    content: "How do I log in?",
    answerCount: 2
  },
  {
    title: 'Where is the lunch room?',
    content: "Near the kitchen",
    answerCount: 2
  },
  {
    title: 'How to debug Typescript?',
    content: "Use Vscode it is the best",
    answerCount: 2
  },
]

const port: string | number = process.env.port || 1337;

const app = express();
  
app.listen(port);
app.use(express.static("public"))

console.log("Listening on port: " + port);

app.get("/questions", (_req, res) => {

  debugger;

  res.json(questions);
})

app.get("/main.js", (_req, res) => {
  //serves main.js file to the client
  res.sendFile(path.resolve(__dirname, "..", "client", "client.js"))
} )