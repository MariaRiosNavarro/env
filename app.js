import "dotenv/config"; //hier gibt es schon process.env.
process.env.TEUER_KEY = "11111111";
// Liest die dateien und schreibt es unseren process.env dazu
// ANdere version:
// import dotenv from "dotenv";
import express from "express";
//Zugriff auf UMgebungsvariablen von Betriebsystemnode

console.log("-------✅", process.env.BACKEND_URL);
console.log("-------🌸", process.env.MONGODB);
console.log("-------🍺", process.env.BANK_API_KEY);

const app = express();

app.listen(8000);

//node hat process drin, und lädt sich die variblem von system

// test
