import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {

  state = {

  }

  fetchSongs = () => {
    fetch(API_ENDPOINT)
    .then(r => r.json())
    .then(MainContainer) 
    // just need to pass in the reference
    // then below you set songs=this.fetchSongs
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
         /* TODO: Put your method to fetch the songs */ 

  render(){
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer songs={this.fetchSongs} /> {/** TODO: What props do I need? title, artist, id*/}
      {/* !!!!! THIS IS PASSING THE PROPS OF SONGS DOWN TO MAINCONTAINER */}
      </div>
    );
  }
}

export default App;
