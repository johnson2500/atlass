import React, { Component } from 'react';
import './places.css';

class Places extends Component {
  constructor(props){
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div className='places-container container'>
      <div className='row'>
        <h3 className='col-xs-12 text-center'>Places</h3>
      </div>
      <div className='row'>
        <div className='col-xs-1'/>
        <input id="searchInput" className='col-xs-10' placeholder="Search"/>
        <div className='col-xs-1'/>
      </div>

      <div className='row'>
        <div className='col-xs-1'/>
        <div className='col-10-1'>
          { 3 }
        </div>
        <div className='col-xs-1'/>
      </div>
      </div>
    );
  }
}

export default Places;
