import React from 'react';
import SongList from './SongList';
import Queue from './Queue';

const MainContainer = props => {
    console.log(props, 'here I am')
    return (
        <div className="simple-flex-row top">
            {/* pass fetched songs to SongList component */}
            <SongList songs={props.songs}/> {/** TODO: What props do I need? */}
            <Queue /> {/** TODO: What props do I need? */}
        </div>
    )
}

export default MainContainer;