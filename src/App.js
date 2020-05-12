import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {

  }

  // callback that will fetch songs upon click event
  // pass songs to the MainContainer component
  getSongsHandler = () => {
    fetch(`${API_ENDPOINT}`)
    .then(resp => resp.json())
    .then(MainContainer)
  }
  
  renderNav = () => {
    return (
      <div className="simple-flex-row">
        {/* added the callback to the React event handler */}
        <button onClick={this.getSongsHandler}>Get Songs</button> 
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..."/>
      </div>
    )
  }

  render(){
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        {/* add the songs passed within event handler as a prop */}
        <MainContainer songs={this.getSongsHandler}/> {/** TODO: What props do I need? */}
      </div>
    );
  }
}

export default App;
