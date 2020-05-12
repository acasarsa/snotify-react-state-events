import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {
    songs: []
  }

  setSongs = (newSong) => {
    this.setState({
      songs: newSong
    })
  } 
  
  getSongs = () => {
    fetch(API_ENDPOINT)
    .then(resp => resp.json())
    .then((data) => {
      let songList = data.map((song) => {
        return {
          id: song.id,
          title: song.title,
          artist: song.artist,
          url: song.url,
          genre: song.genre,
          favorite: song.favorite
        }
      })
      this.setSongs(songList)
    })
  }

  renderNav = () => {
    return (
      <div className="simple-flex-row">
        <button onClick={this.getSongs()}>Get Songs</button> 
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..."/>
      </div>
    )
  }

  render(){
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer songs={this.state.songs}/>
      </div>
    );
  }
}

export default App;
