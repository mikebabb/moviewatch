import React from "react";

import {
  MovieCardStyled,
  MoviePosterWrapper,
  PosterOverlay,
  MovieTitle,
  MovieInfoContainer,
  Director,
  Rating
} from "./styles";

import { Movie } from "../../../../models/movies/types";

interface IMovieCardProps {
  movie: Movie;
  onMovieClick: Function;
}

const MovieCard: React.FC<IMovieCardProps> = ({ movie, onMovieClick }) => {
  return (
    <MovieCardStyled>
      <MoviePosterWrapper>
        <img src={movie.thumbnail} alt={`poster for ${movie.title}`} />
        <PosterOverlay onClick={() => onMovieClick(movie)}>
          <p>Watch</p>
        </PosterOverlay>
      </MoviePosterWrapper>
      <MovieInfoContainer>
        <MovieTitle>{movie.title}</MovieTitle>
        <Director>{movie.director}</Director>
        <Rating>
          <span role="img" aria-label="movie rating">
            ⭐
          </span>
          {movie.imdbRating}
        </Rating>
        <p>
          <span role="img" aria-label="movie duration">
            🕐
          </span>
          {movie.runTime}
        </p>
      </MovieInfoContainer>
    </MovieCardStyled>
  );
};

export default MovieCard;
