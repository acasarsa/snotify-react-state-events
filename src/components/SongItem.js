import React, { useState } from 'react';
//Setting state inside function component with state hook. https://reactjs.org/docs/hooks-state.html

const SongItem = props => {
    const [likes, setLikes] = useState(0)
    const clickLike = () => {
        setLikes(likes + 1)
    }

    const toggleFavorite = () => {
        const newSong = {...props, favorite : !props.favorite}
        props.updateSong(newSong)
    }

    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.artist}</td>
            <td><button onClick={null /* Put your click handler here */}>Play Now</button></td>
            <td><button onClick={null /* Put your click handler here */}>Add to Queue</button></td>
            <td onClick={toggleFavorite}>{props.favorite ? "💚" : "♡"}</td>
            <td>Likes: {likes}<button onClick={clickLike}>Like</button></td>
        </tr>
    )
}

export default SongItem;