import React from 'react';
import Filter from './Filter';
import SongItem from './components/SongItem.js'

items = () => this.props.fetch.map((item,key))
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
                        {

                        }}
                    </tbody>
            </table>
        </div>
    )
}

export default SongList;