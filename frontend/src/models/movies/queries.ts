import { gql } from "apollo-boost";

export const GET_MOVIES = gql`
  query {
    movies {
      id
      title
      year
      description
      thumbnail
      director
      imdbRating
      runTime
    }
  }
`;

export const GET_WATCHLIST = gql`
  query {
    watchlist {
      id
      title
      year
      description
      thumbnail
      director
      imdbRating
      runTime
    }
  }
`;
