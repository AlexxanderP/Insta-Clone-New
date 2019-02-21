
import React, { Component } from 'react';
import dummyData from './components/dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }
  render() {
    return (
      <div className="App">

        <SearchBar />
        {this.state.posts.map((post, index) => <PostContainer key={index} post={post}/>)}
      
      </div>
    );
  }
}

App.propTypes = {
  dummyData: PropTypes.arrayOf(
      PropTypes.shape({
          username: PropTypes.string.isRequired,
          thumnailUrl: PropTypes.string,
          likes: PropTypes.number,
          timestamp: PropTypes.string,
          comments: PropTypes.arrayOf(
              PropTypes.shape({
                  username: PropTypes.string.isRequired,
                  text: PropTypes.string
              })
          )
      })
  )
}

export default App;

//name = 'Alexander'
// localStorage.setItem('username', name)
//localStorage.getItem('username')