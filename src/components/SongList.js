import React from 'react';
import Filter from './Filter';

import SongItem from "./SongItem";

const SongList = props => {

    const actions = {
        updateSong: props.updateSong,
        addToQueue: props.addToQueue,
        playNow: props.playNow
    }

    return (
        <div className="half songlist">
            <h2>Song List</h2>
            <Filter />
            <table>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Artists</td>
                            <td>Play?</td>
                            <td>Queue?</td>
                            <td>Favorite</td>
                            <td>Likes</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/** TODO: Render a SongItem component per each song here*/}
                        {
                            props.songs.map((song, index) => {
                                // const {title, artist, favorite} = song;
                                return <SongItem 
                                            {...song} 
                                            {...actions} 
                                            key={index} 
                                        />
                            })
                        }
                    </tbody>
            </table>
        </div>
    )
}

export default SongList;