import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import '../style.css';

// eslint-disable-next-line import/prefer-default-export
export const MovieControls = ({ movie, type }) => {
    const { removeMovieFromWatchlist, addMovieToWatched, removeFromWatched } =
        useContext(GlobalContext);

    return (
        <div className="innerControls">
            {type === 'watchlist' && (
                <div className="d-flex justify-content-around">
                    <button
                        type="button"
                        className="btn btn-sm btn-danger cntrlbtn"
                        onClick={() => addMovieToWatched(movie)}
                    >
                        add to watched
                    </button>
                    <button
                        type="button"
                        className="btn btn-sm btn-danger cntrlbtn"
                        onClick={() => removeMovieFromWatchlist(movie.id)}
                    >
                        remove
                    </button>
                </div>
            )}
            ;
            {type === 'watched' && (
                <div className="d-flex justify-content-around">
                    <button
                        type="button"
                        className="btn btn-sm btn-danger cntrlbutton"
                        onClick={() => removeFromWatched(movie.id)}
                    >
                        remove
                    </button>
                </div>
            )}
        </div>
    );
};
