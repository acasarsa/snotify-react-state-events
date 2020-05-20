import React from 'react';
import SongList from './SongList';
import Queue from './Queue';

const MainContainer = props => {

    const {songs, handleFavorite, playSong, currentSong} = props

    return (
        <div className="simple-flex-row top">
            {<SongList songs={songs} handleFavorite={handleFavorite} playSong={playSong} />} 
            <Queue songs={songs} currentSong={currentSong}/> {/** TODO: What props do I need? */}
        </div>
    )
}

export default MainContainer;
