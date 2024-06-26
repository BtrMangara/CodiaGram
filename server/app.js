require('dotenv');
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const route = require('./router');
app.use(route);

// console.log(port)

app.listen(port,"0.0.0.0",function (){
    console.log(`App listening on port ${port}`);
})