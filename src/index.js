import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./typeDefs.js";

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers, 
    });

  server.applyMiddleware({ app });

  await mongoose.connect('mongodb+srv://Dom:RjIbzYxjHaL8ypxa@cluster0.fpxgk.mongodb.net/graphql', {
    useNewUrlParser: true
  });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();



//import { ApolloClient, InMemoryCache } from '@apollo/client';

/** 
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
  cacheControl: {
      defaultMaxAge: 86000, // 86400 seconds = 24 hours
      },
});

client.query({
    query: gql`
      query {notes{id,name}}
    `
  })
  .then(result => console.log(result));
*/


/** 
{
    "env": {
        "MONGO_USER": "Dom",
        "MONGO_PASSWORD": "RjIbzYxjHaL8ypxa",
        "MONGO_DB": "graphql"
    }
}


*/