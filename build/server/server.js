"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var questions = [{ title: 'How to log in?', content: "How do I log in?", answerCount: 2 }];
var port = process.env.port || 1337;
var app = express_1.default();
app.listen(port);
app.use(express_1.default.static("public"));
console.log("Listening on port: " + port);
app.get("/questions", function (_req, res) {
    res.json(questions);
});
app.get("/main.js", function (_req, res) {
    //serves main.js file to the client
    res.sendFile(path_1.default.resolve(__dirname, "..", "client", "client.js"));
});
//# sourceMappingURL=server.js.map