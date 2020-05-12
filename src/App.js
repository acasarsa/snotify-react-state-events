import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {
  }

 getSongs = () => {
    fetch(API_ENDPOINT)
    .then((resp) => resp.json())
    .then(songs => {
      songs.forEach(song => {
        let tr = document.createElement('tr')
        let table = document.querySelector("tbody")
        tr.innerHTML = `
        <td>${song.title}</td>
        <td>${song.artist}</td>
        <td>Play?</td>
        <td>Queue?</td>
        <td>Favorite</td>
        <td>0</td>
        `
        table.appendChild(tr)
      })
      })
  }

  renderNav = () => {
    return (
      <div className="simple-flex-row">
        <button onClick={this.getSongs}>Get Songs</button> 
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..."/>
      </div>
    )
  }

  render(){
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer /> {/** TODO: What props do I need? SongList?*/}
      </div>
    );
  }
}

export default App;
