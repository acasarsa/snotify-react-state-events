import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {
    songs: [],
    queue: [],
    currentlyPlaying: null
  }

  fetchSongs = () => {
    fetch(API_ENDPOINT)
    .then(res => res.json())
    .then(songs => {
      console.log("SONGS", songs);
      this.setState({...this.state, songs});
    })
    .catch(err => console.error("error", err));
  };

  playNow = (song) => {
    console.log("PLAY NOW", song);
    this.setState({
      ...this.state,
      currentlyPlaying: song
    });
  }

  addToQueue = (song) => {
    console.log("ADD TO QUEUE", song);
    this.setState({
      ...this.state,
      queue: [...this.state.queue, song]
    });
  }

  removeFromQueue = (index) => {
    let copy = [...this.state.queue];
    copy.splice(index, 1);

    this.setState({
      ...this.state,
      queue: copy
    });
  }

  updateSong = (updated) => {
    console.log("UPDATE SONG", updated);
    fetch(`${API_ENDPOINT}/${updated.id}`, {
      method: "PATCH",
      headers: {
          "content-type":"application/json",
          "accept": "application/json"
      },
      body: JSON.stringify(updated)
    })
    .then(res => res.json())
    .then(data => {
      // setFavorite(song.favorite);
      const copy = {...this.state};
      copy.songs.forEach((song, index) => {
        if(song.id === data.id){
          console.log("MATCHED ID", data);
          copy.songs[index] = data;
        }
      });
      console.log("COPY", copy);
      this.setState(copy);
    })
    .catch(err => console.error("err", err));
  };
  
  renderNav = () => {
    return (
      <div className="simple-flex-row">
        <button onClick={this.fetchSongs /* TODO: Put your method to fetch the songs */}>Get Songs</button> 
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..."/>
      </div>
    )
  }

  render(){
    console.log("QUEUE", this.state.queue);
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer 
          songs={this.state.songs} 
          updateSong={this.updateSong} 
          currentlyPlaying={this.state.currentlyPlaying} 
          queue={this.state.queue} 
          addToQueue={this.addToQueue} 
          playNow={this.playNow} 
          removeFromQueue={this.removeFromQueue}
        /> {/** TODO: What props do I need? */}
      </div>
    );
  }
}

export default App;
