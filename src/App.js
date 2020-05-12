import React from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";

let API_ENDPOINT = `http://localhost:6001/songs`;

class App extends React.Component {
  state = {
    songs: [],
  };



  getSongs =  () => {
    fetch(API_ENDPOINT)
    .then(res => res.json())
    .then(songs => {
      this.setState({...this.state, songs});
    })
  };

  patchForSong = (songList) => {
    fetch(`${API_ENDPOINT}/${songList.id}`,{
    method: "PATCH",
    headers: {
      "Content-type":"application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(songList) 
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
        <MainContainer songs={this.state.songs} updateSong={this.patchForSong}/>{" "}
      </div>
    );
  }
}

export default App;
