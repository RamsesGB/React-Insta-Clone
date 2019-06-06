import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';


class App extends React.Component{
  constructor() {
    super();
    this.state = {
      postsData: dummyData
    };
  }

  render() {
    console.log(this.state.postsData);
    return (
      <div className="App">
        <SearchBar />
        <PostContainer postsData={this.state.postsData} />
      </div>
    );
  }
}

export default App;
