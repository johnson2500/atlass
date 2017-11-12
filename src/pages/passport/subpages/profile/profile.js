import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './profile.css';

class Bio extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        Testing
      </div>
    )
  }
}

class Profile extends Component {
  constructor(props ){
    super();
  }

  tempData(){
  }

  render() {
    return (
      <div className='profile-container container'>
        <div className='row'>
          <div className='col-xs-1'></div>
          <div className='col-xs-10 text-center'>
            Profile
            <img id='profilePic' alt='' src='https://scontent.fbed1-2.fna.fbcdn.net/v/t1.0-9/20294456_325291221249142_261223857369337323_n.jpg?oh=c2a489fb2fcd145f52adcba491cab62a&oe=5A65143A' className='profile-pic'></img>
            <br/>
            Ryan Johnson
            23 YO
            <Bio/>
          </div>
          <div className='col-xs-1'></div>
        </div>
        <h3 className=''>Bio</h3>
        <br/>
        <div>
          I am Ryan Johnson I love poop and shit.
          <h3>Test</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    )
  }
  console
}

export default Profile;
