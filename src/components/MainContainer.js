import React from 'react';
import SongList from './SongList';
import Queue from './Queue';

const MainContainer = props => {
    return (
        <div className="simple-flex-row top">
            <SongList songs={props.songs} updateSong={props.updateSong} addToQueue={props.addToQueue} playNow={props.playNow} /> 
            <Queue currentlyPlaying={props.currentlyPlaying} queue={props.queue} removeFromQueue={props.removeFromQueue} /> 
        </div>
    )
}

export default MainContainer;