import React from 'react';

const SongItem = props => {
    return (
        <tr>
            <td>{props.songInfo.title}</td>
            <td>{props.songInfo.artist}</td>
            <td><button onClick={null /* Put your click handler here */}>Play Now</button></td>
            <td><button onClick={null /* Put your click handler here */}>Add to Queue</button></td>
            <td onClick={null /* Put your click handler here */}>{props.songInfo.favorite ? "💚" : "♡"}</td>
            <td>Likes: 0</td>
        </tr>
    )
}

export default SongItem;