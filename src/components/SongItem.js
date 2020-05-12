import React from "react";

class SongItem extends React.Component {
    state = {
        like: 0
    }
    onLikeClicks = () => {
        this.setState({
          like: this.state.like + 1
        })
      }
  render() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.artist}</td>
        <td>
          <button onClick={null /* Put your click handler here */}>
            Play Now
          </button>
        </td>
        <td>
          <button onClick={null /* Put your click handler here */}>
            Add to Queue
          </button>
        </td>
        <td onClick={null /* Put your click handler here */}>
          {this.props.favorite ? "💚" : "♡"}
        </td>
        <td onClick={this.onLikeClicks}>Likes: {this.state.like}</td>
      </tr>
    );
  }
}

export default SongItem;
