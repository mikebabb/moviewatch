import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { MoviesPage } from "./styles";
import MovieCard from "./components/MovieCard";

import { GET_MOVIES } from "../../models/movies/queries";

interface Movie {
  id: string;
  title: string;
  year: number;
  description: string;
  thumbnail: string;
}

const Movies = () => {
  const { data, loading } = useQuery(GET_MOVIES);
  const handleMovieClick = (movie: Movie) => {
    console.log(movie);
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
