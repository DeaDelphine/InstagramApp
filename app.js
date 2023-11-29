const express = require("express");
const app = express();

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/udemy_db');
console.log(`📚[DATABASE] MongoDB is running 🔥`)
}

const port = process.env.PORT || 5678;

//Routes 


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Utilisation des Routes


app.listen(port, () => console.log(`[SERVER] is runinning on port ${port}`));