import React from 'react';

const SongItem = props => {
    // constructor(){
    //     super();

    //     this.state = {   DOES THIS NOT WORK BECUASE IT'S NOT A CLASS
    //         Likes: 0;
    //     };
    // }


    handleLike = () => {
        this.setState(previousState => {
            return {
                Likes: previousState.Likes + 1
            }
        })
    }
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.artist}</td>
            <td><button onClick={null /* Put your click handler here */}>Play Now</button></td>
            <td><button onClick={null /* Put your click handler here */}>Add to Queue</button></td>
            <td onClick={null /* Put your click handler here */}>{props.favorite ? "💚" : "♡"}</td>
            <td onClick={this.handleLike}>Likes: {this.state.Likes}</td>
        </tr>
    )
}

export default SongItem;