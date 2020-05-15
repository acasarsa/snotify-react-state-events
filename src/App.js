import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {
    songs: []
  }

  fetchSong = () => {
     fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(songs => this.setState({songs}))
  }

  updateSong = ( id, newFav) => {
    fetch(API_ENDPOINT + `/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept:  'application/json'
      },
      body: JSON.stringify ({ favorite: newFav})
    })
    .then(response => response.json())
    .then(updatedSong => {
      let newSongs = this.state.songs.map( song => {
        if (song.id ===  updatedSong.id){
          return updatedSong
        } else {
          return song
        }
      })
      this.setState({ songs: newSongs })
  })

}
  
  renderNav = () => {
    return (
      <div className="simple-flex-row">
        <button onClick={this.fetchSong}>Get Songs</button> 
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..."/>
      </div>
    )
  }

  render(){
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer songs={this.state.songs} updateSong={this.updateSong}/> {/** TODO: What props do I need? */}
      </div>
    );
  }
}



export default App;
