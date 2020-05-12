import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import SongItem from './components/SongItem'
import SongList from './components/SongList'

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {

  }

  handlesOnClick = ()=>{
      fetch(API_ENDPOINT)
      .then(r => r.json())
      .then(songs => <SongItem title={this.title} artist={this.artist} />)
    //im not sure if I can pass in a function here to create a song item div to append bc function gives error below
    //So im trying to see if I pass in a songitem component, what behavior I would get
  }

  // function displaySong(props) { 
    // let div = document.getElementsByClassName('')
    
  //   <SongItem title={props.title} artist={props.artist} />

  // }
  
  
  renderNav = () => {
    return (
      <div className="simple-flex-row">
        <button onClick={this.handlesOnClick /* TODO: Put your method to fetch the songs */}>Get Songs</button> 
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..."/>
      </div>
    )
  }

  render(){
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer /> {/** TODO: What props do I need? */}
      </div>
    );
  }
}

export default App;
