// eslint-disable-next-line import/prefer-default-export
import { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

// eslint-disable-next-line import/prefer-default-export
export const ResultCard = ({ movie }) => {
    const { addMovieToWatchList, watchlist } = useContext(GlobalContext);

    const storedMovie = watchlist.find((o) => o.id === movie.id);
    const watchListDisable = !!storedMovie;

    return (
        <div className="row">
            <div className="col-sm-4 ">
                <div className=" text-center">
                    {movie.poster_path ? (
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={`${movie.title} poster`}
                        />
                    ) : (
                        <div className="filter-poster" />
                    )}
                </div>
            </div>
            <div className="col-sm-4">
                <div className="info">
                    <h5 className="mt-4"> {movie.title}</h5>
                    <p className="mt-4 mb-5">{movie.release_date}</p>
                    <button
                        className="btn btn-danger mt-5 mt-sm-1"
                        type="button"
                        onClick={() => addMovieToWatchList(movie)}
                        disabled={watchListDisable}
                    >
                        Add to watch list
                    </button>
                </div>
            </div>
        </div>
    );
};
