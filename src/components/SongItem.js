import React from 'react';
import { render } from '@testing-library/react';

class SongItem extends React.Component {
    // console.log('SongItem Props', props)

    state = {
        likes: 0
    }

    addLike = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }
    
    render() {
        const {title, artist, favorite} = this.props.song
        return (
            <tr>
                <td>{title}</td>
                <td>{artist}</td>
                <td><button onClick={null /* Put your click handler here */}>Play Now</button></td>
                <td><button onClick={null /* Put your click handler here */}>Add to Queue</button></td>
                <td onClick={null /* Put your click handler here */}>{favorite ? "💚" : "♡"}</td>
                <td onClick={this.addLike}>Likes: {this.state.likes}</td>
            </tr>
        )
    }
}

export default SongItem;