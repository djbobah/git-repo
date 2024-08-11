import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer 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`, // Замените YOUR_GITHUB_TOKEN на ваш токен
  },
  cache: new InMemoryCache(),
});

export default client;
