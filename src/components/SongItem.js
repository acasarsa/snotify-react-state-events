import React, { useState } from 'react';

const SongItem = props => {
    console.log("item props:", props)
    //declare a new state variable, [variable name, a method name to set this state later] 
    // 0 is the initial state value
    const [likes, setLikes] = useState(0);

    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.artist}</td>
            <td><button onClick={null /* Put your click handler here */}>Play Now</button></td>
            <td><button onClick={null /* Put your click handler here */}>Add to Queue</button></td>
            <td onClick={null /* Put your click handler here */}>{props.favorite ? "💚" : "♡"}</td>
            <td onClick={() => setLikes(likes + 1)}>Likes: {likes}</td> {/* we can't use this.likes because we are using a functional component and not a class component*/}
        </tr>
    )
}

export default SongItem;