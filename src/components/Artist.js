import React from 'react';
import '../styles/styles.css';
import {BrowserRouter,Route,Link, withRouter} from 'react-router-dom';
import {ArtistPage} from '../pages/artistPage';


export const Artist = ({filteredArtists}) => (

    filteredArtists.map((artists) => (
        <React.Fragment>
            <BrowserRouter>
            <Route path={`/Artists/${artists.id}`} exact component={<ArtistPage/>}>
            <Link  key={artists.id}  to={`/Artists/${artists.id}`}  style={{ textDecoration: 'none' }}>
                <div className={"artistCard"}>
                        <p className={"cardName"}>{artists.name}</p>
                        <img height="300px" width="300px" src={artists.cover}></img>
                </div>
            </Link>
            </Route>
            </BrowserRouter>
        </React.Fragment>

    )
))