import React from 'react';


class SongItem extends React.Component {

    state= {
        Likes: 0,
        Favorites: 0
    }

    addLike = () => {
        this.setState(  {
                Likes: this.state.Likes + 1
            })
    }




render() {  
    return (
        <tr>
            <td>{this.props.title}</td>
            <td>{this.props.artist}</td>
            <td><button onClick={null /* Put your click handler here */}>Play Now</button></td>
            <td><button onClick={null /* Put your click handler here */}>Add to Queue</button></td>
            <td onClick={() => this.props.updateSong(this.props.id, !this.props.favorite)}>{this.props.favorite ? "💚" : "♡"}</td>
            <td onClick={this.addLike}>Likes:{this.state.Likes}</td>
        </tr>
    )
}}
  

export default SongItem;