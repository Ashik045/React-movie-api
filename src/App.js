import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Add } from './Component/Add';
import { Header } from './Component/Header';
import { Watchlist } from './Component/Watchlist';
import { Watched } from './Component/Whatched';
import { GlobalProvider } from './Context/GlobalState';

// const url = 'https://jsonplaceholder.typicode.com/users';

function App() {
    return (
        <GlobalProvider>
            <Router>
                <Header />

                <Switch>
                    <Route exact path="/">
                        <Watchlist />
                    </Route>

                    <Route exact path="/watched">
                        <Watched />
                    </Route>

                    <Route exact path="/add">
                        <Add />
                    </Route>
                </Switch>
            </Router>
        </GlobalProvider>
    );
}

export default App;
