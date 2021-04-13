import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./typeDefs.js";

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app });

  await mongoose.connect("mongodb+srv://Dom:RjIbzYxjHaL8ypxa@cluster0.fpxgk.mongodb.net/graphql", {
    useNewUrlParser: true
  });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();


/** 
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`,);


//const httpServer = createServer(app);

const startServer = async () => {
  const app = express();
  const httpServer = createServer(app)

server.applyMiddleware({ app });
server.installSubscriptionHandlers(httpServer);

const port = 4000;

httpServer.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`,);
  console.log(`🚀 Subscriptions ready at ws://localhost:${port}${server.subscriptionsPath}`,);
});
}

startServer();

*/


/** 
DB_HOST=mongodb+srv://Dom:RjIbzYxjHaL8ypxa@cluster0.fpxgk.mongodb.net/graphql?retryWrites=true&w=majority
CLIENT_ID=<f7682de5e733c41ff0dd>
CLIENT_SECRET=<8d4304bcd05e7648c77310edbea33540800f67ac>

*/
