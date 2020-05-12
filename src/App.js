import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import SongItem from './components/SongItem'
let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  constructor(props){
    super(props)
  this.state = {
      data: null
  }
}

  fetchSongs= ()=>{
    fetch("http://localhost:6001/songs").then(resp=>resp.json())
    .then(data=> this.setState({data: data}))
    
  }
  
  renderNav = () => {
    return (
      <div className="simple-flex-row">
        <button onClick={this.fetchSongs()}>Get Songs</button> 
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..."/>
      </div>
    )
  }

  render(){
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer fetch= {this.state.data}/> {/** TODO: What props do I need? */}
      </div>
    );
  }
}

export default App;
