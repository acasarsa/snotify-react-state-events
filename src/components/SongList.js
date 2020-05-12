import React from 'react';
import Filter from './Filter';
// add import for SongItem
import SongItem from './SongItem';

const SongList = props => {
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
                        {/* spread operator creates props for every key value pair without having to explicitly state them */}
                        {/* set key to song id instead of index of song */}
                        {props.songs.map(song => <SongItem key={song.id} {...song} />)}
                    </tbody>
            </table>
        </div>
    )
}

export default SongList;