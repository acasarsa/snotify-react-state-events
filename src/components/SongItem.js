import React from 'react';


export default class SongItem extends React.Component {

    state = {
        likes: 0
    }

    handleLike = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }


    render() {
        const {id, title, artist, favorite, handleFavorite, playSong} = this.props
        return (
            <tr>
            <td>{title}</td>
            <td>{artist}</td>
            <td><button onClick={() => playSong(id)}>Play Now</button></td>
            <td><button onClick={null /* Put your click handler here */}>Add to Queue</button></td>
            <td onClick={() => handleFavorite(id, favorite)}>{favorite ? "💚" : "♡"}</td>
            <td><button onClick={this.handleLike}> Likes:{this.state.likes} </button></td> 
        </tr>
        )
    }
}
