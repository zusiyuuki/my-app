const { SSL_OP_NETSCAPE_CA_DN_BUG } = require('constants');
const express = require('express')
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./fake-db');
const productRoutes =require('./routes/products')

const app = express()

mongoose.connect(config.DB_URL,
).then(
    ()=>{
        const fakeDb =new FakeDb()
        fakeDb.initDb()
    }
)

app.use('/api/v1/product',productRoutes)


const PORT =process.env.PORT || '3001'


app.listen(PORT,function(){
    console.log('I am running')
})

