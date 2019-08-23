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
