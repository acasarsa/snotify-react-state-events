import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {

    songs: [],

  }


  renderSongs = () => {
    fetch(API_ENDPOINT)
    .then(resp => resp.json)
    .then(data => this.setState({songs: data}))
  // } {
  //       return {
  //         id: song.id,
  //         title: song.title,
  //           artist: song.artist,
  //           url: song.url,
  //           genre: song.genre,
  //           favorite: song.favorite,


  //       };

    
  }
  
  renderNav = () => {
    return (
      <div className="simple-flex-row">
        <button onClick={this.renderSongs /* TODO: Put your method to fetch the songs */}>Get Songs</button> 
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..."/>
      </div>
    )
  }

  render(){
    return (
      <div className="App">
        {this.renderNav()} {" "}
        <MainContainer /> 
        songs = {this.state.songs}
      </div>
    );
  }
}

export default App;
