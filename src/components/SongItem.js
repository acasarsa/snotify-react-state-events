import React from 'react';

const SongItem = props => {
    console.log('SongItem Props', props)
    
    const {title, artist, favorite} = props.song

    return (
        <tr>
            <td>{title}</td>
            <td>{artist}</td>
            <td><button onClick={null /* Put your click handler here */}>Play Now</button></td>
            <td><button onClick={null /* Put your click handler here */}>Add to Queue</button></td>
            <td onClick={null /* Put your click handler here */}>{favorite ? "💚" : "♡"}</td>
            <td>Likes: 0</td>
        </tr>
    )
}

export default SongItem;