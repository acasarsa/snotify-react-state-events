import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {
    songs: [],
    search: '',
    currentSong: null
  }

  


  componentDidMount() {
    this.fetchSongs()
  }

  fetchSongs = () => {
    fetch(API_ENDPOINT)
    .then( r => r.json())
    .then( songs => this.setState({
      songs
    }))
  }

  handleFavorite = (id, favorite) => {
    
    let newFav = {favorite: !favorite}

    let options = {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(newFav)
    }

    fetch(`${API_ENDPOINT}/${id}`, options)
      .then(r => r.json())
      .then( updatedSong => this.setState({
        songs: this.state.songs.map(song => song.id === id ? updatedSong : song )
      }) )
    }


  handleSearch = (event) => {
      this.setState({search: event.target.value})
  }

  playSong = (id) => this.setState({ currentSong: id })

  
  renderNav = () => {

    return (
      <div className="simple-flex-row">
        <button>I don't do stuff</button> 
        <h1>S-not-ify 🐽</h1>
        <input value={this.state.search} onChange={this.handleSearch} placeholder="Search by title or artist..."/>
      </div>
    )
  }

  render(){

    const {search, songs, currentSong} = this.state
    let filteredSongs = [...songs]

    if (search.length > 0) {
      filteredSongs = filteredSongs.filter( song => { 
        if ( song.title.toLowerCase().includes(this.state.search.toLowerCase()) 
          || song.artist.toLowerCase().includes(this.state.search.toLowerCase())) {
          return true
        } else {
          return false
        }  
      })
    } 


    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer 
        songs={filteredSongs} 
        handleFavorite={this.handleFavorite}
        playSong={this.playSong} 
        currentSong={currentSong}
        />
      </div>
    );
  }
}

export default App;
