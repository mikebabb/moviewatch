import { gql } from "apollo-boost";

export const WATCH_MOVIE = gql`
  mutation WatchMovie($movieID: ID!) {
    watchMovie(movieID: $movieID) {
      id
    }
  }
`;
