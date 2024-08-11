import { gql } from "@apollo/client";

export const SEARCH_REPOSITORIES = gql`
  query SearchRepositories($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 10) {
      edges {
        node {
          id
          name
          description
          url
          stargazerCount
        }
      }
    }
  }
`;
