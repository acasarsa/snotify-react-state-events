import React from 'react';
import SongList from './SongList';
import Queue from './Queue';

const MainContainer = props => {
    // console.log('maincontainer props:', props)
    return (
        <div className="simple-flex-row top">
            <SongList songs={props.songs} addFav={props.addFav}/> {/** TODO: What props do I need? */}
            <Queue /> {/** TODO: What props do I need? */}
        </div>
    )
}

export default MainContainer;