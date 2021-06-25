/* eslint-disable react/destructuring-assignment */
import { createContext, useEffect, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial state
const intialState = {
    watchlist: localStorage.getItem('watchlist')
        ? JSON.parse(localStorage.getItem('watchlist'))
        : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
};

// create context
export const GlobalContext = createContext(intialState);

// provider component
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, intialState);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
        localStorage.setItem('watched', JSON.stringify(state.watched));
    }, [state]);

    // actions
    const addMovieToWatchList = (movie) => {
        dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie });
    };
    const removeMovieFromWatchlist = (id) => {
        dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: id });
    };

    const addMovieToWatched = (movie) => {
        dispatch({ type: 'ADD_TO_WATCED', payload: movie });
    };

    // remove from watched
    const removeFromWatched = (id) => {
        dispatch({ type: 'REMOVE_FROM_WATCHED', payload: id });
    };

    return (
        <GlobalContext.Provider
            value={{
                watchlist: state.watchlist,
                watched: state.watched,
                addMovieToWatchList,
                removeMovieFromWatchlist,
                addMovieToWatched,
                removeFromWatched,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};
