const express = require('express');
//const products = require('./data/products');
const dotenv = require('dotenv');
const colors = require ('colors');
const connectDB = require('./config/db')
const products = require('./routes/products')
const { notFound , errorHandler } = require('./middleware/errorMiddleware')

const app = express();
app.use(express.json())


dotenv.config();
connectDB();

app.get('/',(req,res)=>{
    res.send('api is running');
})

app.use('/products',products)
const PORT = process.env.PORT || 5000
app.use(notFound)
app.use(errorHandler)

app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
  )