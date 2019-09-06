import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { MoviesPage } from "./styles";
import MovieCard from "./components/MovieCard";

import { Movie } from "../../models/movies/types";

import { GET_MOVIES } from "../../models/movies/queries";
import { WATCH_MOVIE } from "../../models/movies/mutations";

const Movies = () => {
  const { data, loading } = useQuery(GET_MOVIES);
  const [watchMovie] = useMutation(WATCH_MOVIE);
  const handleMovieClick = (movie: Movie) => {
    watchMovie({ variables: { movieID: movie.id } });
  };

  if (loading) {
    return null;
  }

  const movies = data.movies;

  return (
    <MoviesPage>
      {movies.map((movie: Movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={handleMovieClick}
        />
      ))}
    </MoviesPage>
  );
};

export default Movies;
