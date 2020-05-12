import React from 'react';
import Filter from './Filter';
import { render } from '@testing-library/react';

const SongList = props => {
    fetchFunction = () => {
    fetch(`http://localhost:6001/songs`)
        .then(response => response.json())
        .then(data => renderData(data))
    }
    renderData = (data) => {
        data.forEach(song => <SongItem title={song.title} artist={song.artist}/>)
    }
    //render() {
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
                        {
                        fetchFunction()
                        }
                    </tbody>
            </table>
        </div>
    )
//}
}

export default SongList;