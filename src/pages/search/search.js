import React, { Component } from 'react';
import './search.css';

class Search extends Component {
  constructor(){
    super();

  }

  componentDidMount(){
    this.input = document.getElementById('searchInput');
    this.results = document.getElementById('searchResults');
  }

  render() {
    return (
      <div className='search-container container'>
        <div className='row'>
          <h3 className='col-xs-12 text-center'>Search</h3>
        </div>
        <div className='row'>
          <div className='col-xs-1'/>
          <input id="searchInput" className='col-xs-10' placeholder="Search"/>
          <div className='col-xs-1'/>
        </div>

        <div className='row'>
          <div className='col-xs-1'/>
          <div id='searchResults' className='col-10-1'>
          </div>
          <div className='col-xs-1'/>
        </div>
      </div>
    );
  }
}

export default Search;
