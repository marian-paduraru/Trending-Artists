import React from 'react';

export const ArtistPage = (artists) => {
    console.log(artists.id);
    return(
        <div>{artists.id} Salut </div>
    );
}
