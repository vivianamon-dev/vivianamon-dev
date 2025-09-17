const express = require('express');
const { default: mongoose } = require('mongoose');
require("dotenv").config();
const elementoRoutes = require("./routes/elemento");
const datoRoutes = require("./routes/datos");
const saveRoutes = require("./routes/save");

const app = express();
const port = process.env.PORT || 9000;

const IP = "192.168.3.21";

//middleware
app.use(express.json());
app.use('/api', elementoRoutes);
app.use('/api', datoRoutes);
app.use('/api', saveRoutes);

//routes
app.get('/', (req, res) => {
    res.send('Welcome to my api')
})

//mongodb connection
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected to MongoDB Atlas")).catch((error) => console.error(error));
app.listen(port, () => {console.log("http://" + IP + ":" + port + "/");});