const mongoose = require("mongoose");

const dbUser = process.env.dbUser
const dbPass = process.env.dbPass

const url = `mongodb+srv://Barde35:Piojos01.@cluster0.jhegx.mongodb.net/estilonavidad?retryWrites=true&w=majority`

mongoose.connect(url, {
    useNewUrlParser: true,
});