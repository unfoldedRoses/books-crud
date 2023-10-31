const express=require('express');
const db=require('./config/dbConfig')
const bookRoutes=require('./routes/bookRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app=express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/books',bookRoutes);


app.listen(3000);
console.log('Server running on port 3000');
