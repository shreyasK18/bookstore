const axios=require('axios');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLList
} = require('graphql');

// "name":"Book1",
// "price":150,
// "author":"Author1",
// "rating":4,
// "in_stock":10
const BookType=new GraphQLObjectType({
    name:'Book',
    fields:()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        author:{type:GraphQLString},
        rating:{type:GraphQLInt},
        in_stock:{type:GraphQLInt},
        price:{type:GraphQLInt}
    })
});

// Root Query
const RootQuery=new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args:{
                id:{type:GraphQLString}
            },
        
            resolve(parentValue,args){
             return axios.get('http://localhost:3000/books/'+args.id).then(res=>res.data)
            }
        },
        books:{
            type:new GraphQLList(BookType),

            resolve(){
             return axios.get('http://localhost:3000/books/').then(res=>res.data)

            }
        }
    }
});

const mutation=new GraphQLObjectType({
    name:"Mutation",
    fields:{
        addBook:{
            type:BookType,
            args:{
                name:{type:new GraphQLNonNull(GraphQLString)},
                author:{type:new GraphQLNonNull(GraphQLString)},
                in_stock:{type:new GraphQLNonNull(GraphQLInt)},
                price:{type:new GraphQLNonNull(GraphQLInt)},
                rating:{type:new GraphQLNonNull(GraphQLInt)}

            },
            resolve(parentValue,args){
                return axios.post('http://localhost:3000/books/',{
                    name:args.name,
                    author:args.author,
                    in_stock:args.in_stock,
                    price:args.price,
                    rating:args.rating
                }).then(res=>res.data)
            }
        },
        deleteBook:{
            type:BookType,
            args:{
                id:{type:new GraphQLNonNull(GraphQLString)},
               
            },
            resolve(parentValue,args){
                return axios.delete('http://localhost:3000/books/'+args.id).then(res=>res.data)
            }
        },
        editBook:{
            type:BookType,
            args:{
                id:{type:new GraphQLNonNull(GraphQLString)},
                name:{type:GraphQLString},
                author:{type:GraphQLString},
                in_stock:{type:GraphQLInt},
                price:{type:GraphQLInt},
                rating:{type:GraphQLInt}

            },
            resolve(parentValue,args){
                return axios.patch('http://localhost:3000/books/'+args.id,{
                    name:args.name,
                    author:args.author,
                    in_stock:args.in_stock,
                    price:args.price,
                    rating:args.rating
                }).then(res=>res.data)
            }
        }
        
        
    }
});
module.exports=new GraphQLSchema({
    query:RootQuery,
    mutation
});