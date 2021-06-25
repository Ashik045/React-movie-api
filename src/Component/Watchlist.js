// eslint-disable-next-line import/prefer-default-export
import { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import '../style.css';
import { MovieCard } from './MovieCard';

// eslint-disable-next-line import/prefer-default-export
export const Watchlist = () => {
    const { watchlist } = useContext(GlobalContext);
    return (
        <div className="container watchedCard">
            <div className="row">
                <div className="my-4">
                    <div className="header col-10">
                        <h1 className="d-flex justify-content-center">My watchlist</h1>
                    </div>

                    {watchlist.length > 0 ? (
                        <div
                            className="d-flex flex-row p-2 "
                            style={{ height: '350px', width: '300px' }}
                        >
                            {watchlist.map((movie) => (
                                <MovieCard movie={movie} type="watchlist" key={movie.id} />
                            ))}
                        </div>
                    ) : (
                        <h2 className="no-movie">No movies to watchlist. add some!!</h2>
                    )}
                </div>
            </div>
        </div>
    );
};
