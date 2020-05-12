import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {
    // create an initial state that represent no songs available until fetch
    songs: []
  }

  // callback that will fetch songs upon click event
  // and setState to add all the fetched songs
  getSongsHandler = () => {
    fetch(`${API_ENDPOINT}`)
    .then(resp => resp.json())
    .then(songs => this.setState({songs}))
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
        {/* add the songs updated in state as a prop */}
        <MainContainer songs={this.state.songs}/> {/** TODO: What props do I need? */}
      </div>
    );
  }
}

export default App;
