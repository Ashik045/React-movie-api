import React from 'react';
import '../style.css';
import { MovieControls } from './MovieControls';

// eslint-disable-next-line import/prefer-default-export
export const MovieCard = ({ movie, type }) => (
    <div className="p-3 cardst">
        {movie.poster_path ? (
            <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`${movie.title} poster`}
            />
        ) : (
            <div className="filter-poster" />
        )}
        <MovieControls type={type} movie={movie} />
    </div>
);
