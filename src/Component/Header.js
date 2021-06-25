import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export
export const Header = () => (
    <header>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/">Watchlist</Link>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-target="#navbarSupportedContent"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Watch List
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/watched">
                                Watched
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link btn btn-primary" to="/add">
                                + Add
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);

// export default Header;
