import React, { Component } from 'react';
import './feed.css';
import FeedItem from './feeditem.js';

class Feed extends Component {
  constructor(props){
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div className='feed-container container'>
          <div className='row text-center'>
            <h1 className='col-xs-12' >Feed</h1>
          </div>
          <FeedItem></FeedItem>
          <FeedItem></FeedItem>
          <FeedItem></FeedItem>
          <FeedItem></FeedItem>
          <FeedItem></FeedItem>
          <FeedItem></FeedItem>
      </div>
    );
  }
}

export default Feed;
