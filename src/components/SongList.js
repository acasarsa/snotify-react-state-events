import React from 'react';
import Filter from './Filter';
import SongItem from './SongItem';

const SongList = props => {
    console.log("beef", props)
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
                        {props.songs.map((song, index) => { return <SongItem {...song} key={index} updateSong={props.updateSong}/> })}
                    </tbody>
            </table>
        </div>
    )
}

export default SongList;


