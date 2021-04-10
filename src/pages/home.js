import React, { Component, useState } from 'react';
import '../styles/styles.css';
import { Artist } from '../components/Artist';
import { artists } from '../db';


const Home = () => {
const [filteredArtists, setFilteredArtists] = useState([]);
//const [isFiltered, setIsFiltered] = useState(false);

const getFilteredArtists = (event) => {
    const keywords = event.target.value;
    const filtered = artists.filter((artist)  => {
        return artist.name.toLowerCase().indexOf(keywords) > -1 ;
    })
    setFilteredArtists(filtered);
}

return(

            <React.Fragment>

                <div className="homeStyle">
                    <input className="inputStyle" onChange={(e) => getFilteredArtists(e)}/>
                </div>


                <div className={"container"}>
                    <Artist filteredArtists = {filteredArtists.length === 0  ? artists : filteredArtists}/>
                </div>

            </React.Fragment>
     );
}

export default Home;    