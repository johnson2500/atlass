import React, { Component } from 'react';
import './feed.css';

class FeedItem extends Component {

  render() {
    return (
      <div className='row'>
        <div className='col-xs-1'></div>
        <div className='feed-item col-xs-10'>
          <img alt="" className="adjust-width text-center" src={ require("../.././imgs/atlas.png") }></img>
          <p>OMG IM SO COOL I WENT HERE LOOKA T ME IM THE BEST BLACH BLACH BLAJIOFJOJORJOJ OJOJ F</p>
          <textarea className='feed-item-textarea' placeholder='Comment'></textarea>
          <div className="float">
            <span className='glyphicon glyphicon-thumbs-up'>Like</span>
          </div>
        </div>
        <div className='col-xs-1'></div>
      </div>
    );
  }
}

export default FeedItem;
