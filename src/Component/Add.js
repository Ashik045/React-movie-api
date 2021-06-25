import { useEffect, useRef, useState } from 'react';
import { ResultCard } from './ResultCard';

// eslint-disable-next-line import/prefer-default-export
export const Add = () => {
    const [query, setQery] = useState('');
    const [results, setResults] = useState([]);
    const inputRef = useRef(null);

    const handleChange = (e) => {
        e.preventDefault();
        setQery(e.target.value);

        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-us&page=1&include_adult=false&query=${e.target.value}`
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (!data.errors) {
                    setResults(data.results);
                } else {
                    setResults([]);
                }
            });
    };

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="add-page text-center mx-auto">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="search for a movie"
                            value={query}
                            onChange={handleChange}
                            className="col-6 bg-dark text-white my-3 p-2"
                        />
                    </div>
                    {results.length > 0 && (
                        <ul className="results" style={{ listStyleType: 'none' }}>
                            {results.map((movie) => (
                                <li className="mt-3" key={movie.id}>
                                    <ResultCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};
