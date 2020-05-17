import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
// import SongItem from './components/SongItem'

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {
    songs: [],
  
  }



  

  fetchSongs = () => {
    fetch(API_ENDPOINT)
    .then(r => r.json())
    .then(songs => this.setState({songs}))
  }


  addFav = (id, newFav)=>{
    fetch(API_ENDPOINT + `/${id}`, {
      method: 'PATCH',
      headers: 
      {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        favorite: newFav
      })
      })
    .then(r => r.json())
    .then(updatedSong => {
      let newSong = this.state.songs.map(song => {
        if(song.id === updatedSong.id){
          return updatedSong
        }else{
          return song
        }
      })
      this.setState({songs: newSong})
    })
  
   }






  
  renderNav = () => {
    return (
      <div className="simple-flex-row">
        <button onClick={this.fetchSongs}>Get Songs</button> 
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..."/>
      </div>
    )
  }

  render(){
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer songs={this.state.songs} addFav={this.addFav} /> {/** TODO: What props do I need? */}
      </div>
    );
  }
}

export default App;
