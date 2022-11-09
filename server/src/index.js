const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = requiere('cors');
const teams = require('./routes/teams')

const app = express();
const PORT = process.env.PORT || 3000;

//midleware
app.use(express.json());
app.use('/api', teams);
app.use(cors({origin:['http://localhost:3000']}));

//add routes
app.get('/', (req, res) => {
    res.send("F1 API DATA")
});

//connection to mongodb
mongoose
.connect(process.env.URI_MONGODB)
.then(() => console.log("conected to database"))
.catch((error) => console.error(error));

app.listen(PORT, () => {
    console.log(`server is running in http://localhost:${PORT}`);
});