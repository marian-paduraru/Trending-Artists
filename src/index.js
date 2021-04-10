import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './components/Header.js';
import Home from './pages/home.js';


const App = () => (
    <div className = "homeBackground">
        <Header/>
            <BrowserRouter>
                    <Route path="/" exact component={Home}/>
                    {/* <Route path="/Home" exact component={Home}/> */}
            </BrowserRouter>
    </div>
) 

ReactDOM.render(<App/>, document.getElementById('root'));