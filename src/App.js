import React from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";
const requestHeaders = {
  "content-type":"application/json",
  "accept": "application/json"
}
let API_ENDPOINT = `http://localhost:6001/songs`;
// let response = fetch(API_ENDPOINT).then((res) => res.json());

class App extends React.Component {
  state = {
    songs: [],
  };

  setSongs = (newSongs) => {
    this.setState({
      songs: newSongs,
    });
  };

  getSongs = () => {
    fetch(API_ENDPOINT)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let songsList = data.map((song) => {
          return {
            id: song.id,
            title: song.title,
            artist: song.artist,
            url: song.url,
            genre: song.genre,
            favorite: song.favorite,
          };
        });
        this.setSongs(songsList);
        // console.log(this.state.songs);
      });
  };

  patchSong = (songObject) => {
    fetch(`${API_ENDPOINT}/${songObject.id}`,{
    method: "PATCH",
    headers: requestHeaders,
    body: JSON.stringify(songObject) 
    }).then(this.getSongs)
  }

  renderNav = () => {
    return (
      <div className="simple-flex-row">
        <button onClick={this.getSongs}>Get Songs</button>
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..." />
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        {this.renderNav()}{" "}
        {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer songs={this.state.songs} updateSong={this.patchSong}/>{" "}
        {/** TODO: What props do I need? */}
      </div>
    );
  }
}

export default App;
