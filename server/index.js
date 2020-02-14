const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers');
const verifyToken = require('./utils/verifyToken');
const AuthDirectives = require('./resolvers/Directives/AuthDirectives.js');

const typeDefs = importSchema('./server/schema.graphql');

/* const schema = {
    resolvers,
    typeDefs
} */

// esta se intercambia cuando esta en producción para que no vean las claves y puedan borrar tu base de datos
const MONGO_URI = 'mongodb+srv://Eduardo:MarioEduardo17@cluster0-5hrxf.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const mongo = mongoose.connection;

mongo.on('error', (error) => console.log(error))
    .once('open', () => console.log('Connected to database'));

const server = new ApolloServer({
    typeDefs,
    resolvers,
    schemaDirectives: {
        auth: AuthDirectives
    },
    context: async ({ req }) => verifyToken(req)
});

server.listen().then(({ url }) => {
    console.log(`Server starts in : ${url}`);
});