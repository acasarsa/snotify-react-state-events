import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {
    songs:[]
  }
  
  getSongs = () => { 
    fetch(API_ENDPOINT)
    .then(resp => resp.json())
    .then(songArray => {
      console.log(songArray)
        this.setState({...this.state, songs:songArray })
    })
    .catch((error) => {
      console.log(error)
    })
  } 

  renderNav = () => {
    return (
      <div className="simple-flex-row">
        <button onClick={this.getSongs}>Get Songs</button> 
        <span>S-not-ify</span>
        <input placeholder="Search by title or artist..."/>
      </div>
    ) 
  }

  render(){
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer  /> {/** TODO: What props do I need? */}
      </div>
    );
  }
}

export default App;
