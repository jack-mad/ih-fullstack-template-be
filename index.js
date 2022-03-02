
// importaciones

const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');

//middlewares
require('dotenv').config();
connectDB();
app.use(cors()) //peticiones json de react hasta el servidor

app.use(express.json({extended: true})); //config. expres para enviar json al servidor


//ruteo
app.use("/api/users", require("./routes/users"))
app.use('/api/pets', require('./routes/pets'))
app.use('/',require('./routes/routes'))

//servidor
app.listen(process.env.PORT, () => console.log(`Servidor activo en puerto ${process.env.PORT}`))