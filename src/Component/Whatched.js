import { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import '../style.css';
import { MovieCard } from './MovieCard';

// eslint-disable-next-line import/prefer-default-export
export const Watched = () => {
    const { watched } = useContext(GlobalContext);

    return (
        <div className="container watchedCard">
            <div className="row ">
                <div className="my-4">
                    <div className="header col-10">
                        <h1>Watched movie</h1>
                    </div>

                    {watched.length > 0 ? (
                        <div
                            className="d-flex flex-row p-2"
                            style={{ height: '350px', width: '300px' }}
                        >
                            {watched.map((movie) => (
                                <MovieCard movie={movie} type="watchlist" />
                            ))}
                        </div>
                    ) : (
                        <h5 className="no-movie ms-5">
                            No movies to watched. add some from watchlist!!
                        </h5>
                    )}
                </div>
            </div>
        </div>
    );
};
