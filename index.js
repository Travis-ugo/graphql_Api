const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const MONGODB = "mongodb+srv://Travis_okonicha:googleman@cluster0.958cxgq.mongodb.net/?retryWrites=true&w=majority";

// typeDefs = Graphql Type Definition
// resolvers = How do we resolve queries / mutations

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');


const server = new ApolloServer(
    {
        typeDefs,
        resolvers,
    }
);


mongoose.connect(
    MONGODB, { useNewUrlParser: true }
).then(() => {
    console.log('MongoleDB connection successful ✅✅');
    return server.listen({ port: 4000 });
}).then((res) => {
    console.log('server running at ' + res.url);
});