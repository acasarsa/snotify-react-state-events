import React from 'react';
import Filter from './Filter';
// import { render } from '@testing-library/react';
import SongItem from './SongItem';



const SongList = props => {
    console.log('songlist props:', props)
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
                     {/* {* TODO: Render a SongItem component per each song here} */}
                    {props.songs.map(song => <SongItem key={song.id} {...song} addFav={props.addFav}/>)}
                    </tbody>
            </table>
        </div>
    )
}

export default SongList;