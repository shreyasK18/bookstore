const express=require('express');
const expressGraphQL=require('express-graphql').graphqlHTTP;
const PORT=process.env.PORT || 4000;
const cors = require('cors');
const schema=require('./schema.js');
const app=express();
app.use(cors());
app.use('/graphql',expressGraphQL({
    schema:schema,
    graphiql:true    
}))
app.listen(4000,()=>console.log(`Server running on port ${PORT}`))

