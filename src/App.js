import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`
let response = fetch(API_ENDPOINT).then(res => res.json())

class App extends React.Component {
  state = {
    songs: [],
  }
  
handleClick = () => {
  fetch(API_ENDPOINT)
  .then(response => {
    return response.json();
  }).then(data => {
    let songsList = data.map((song) => {
      return({
        id : song.id,
        title : song.title,
        artist : song.artist,
        url : song.url,
        genre : song.genre,
        favorite : song.favorite
      })
    })
    this.setSongs(songsList)
    console.log(this.state.songs)
  })
} 

setSongs = (newSongs) => {
  this.setState({
    songs: newSongs
  })
}

  renderNav = () => {
    return (
      <div className="simple-flex-row">
        <button onClick={this.handleClick}>Get Songs</button> 
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..."/>
      </div>
    )
  }

  render(){
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer setSongs={this.setSongs}/> {/** TODO: What props do I need? */}
      </div>
    );
  }
}

export default App;
