import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {

  state = {
    songs: []
  }

 fetchSongs = () => {
   fetch(API_ENDPOINT)
   .then(response => response.json())
   .then(songs => this.setState({songs}))
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
    console.log(this.state.songs)
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer songs={this.state.songs} /> 
      </div>
    );
  }
}

export default App;
