const express = require('express');
const mongoose = require ('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/usuarios', require('./routes/userRoutes'));
app.use('/api/cardapio', require('./routes/productRoutes'));
app.use('/api/pedidos', require('./routes/orderRoutes'));



mongoose.connect(process.env.MONGO_URI).then(() => 
    app.listen(process.env.PORT,() =>
    console.log("Servidor rodando!")))