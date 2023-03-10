
import './App.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import  Playlist  from '../Playlist/Playlist';
// import TrackList from '../TrackList/TrackList';
class App extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello World'
    }
  }

  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
         <SearchBar/> 
        <div className ="App-playlist">
           <SearchResults /> 
           <Playlist /> 
        </div>
      </div>
    </div>
    );
  }
}

export default App;
