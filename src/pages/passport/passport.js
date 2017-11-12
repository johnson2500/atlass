import React, { Component } from 'react';
import './passport.css';
import Icon from './profileicon.js';
import Map from './subpages/maps/maps.js';
import Profile from './subpages/profile/profile.js';
//import Post from './subpages/posts/post.js'

class Passport extends Component {
  constructor(props){
    super(props);
    this.icons = [
      {
        title: "Profile",
        icon : 'user'
      },
      {
        title : "Photos",
        icon : 'film'
      },
      {
        title : "Map",
        icon : 'globe'
      },
      {
        title : "Posts",
        icon : 'th-list'
      }
    ];
    this.content =
    this.state = { mainContent : <Profile/>};
  }

  changeView(name){
    switch(name){
      case 'Profile':
        this.content = <Profile/>;
        break;
      case 'Photos':
        this.content = "photos";
        break;
      case 'Posts':
        this.content = 'Posts';
        break;
      case 'Map':
        this.content = <Map/>;
        break;
      default:
        break;
    }
    this.setState({mainContent:this.content})
  }
//// <img alt="none" className="adjust-width text-center" src={ require("../.././imgs/jumbo.png") }></img>
  render() {
    return (
      <div className='passport-container container'>

      <div className='row text-center'>
        <p className='col-xs-1'></p>
        <h4 className='col-xs-10'>Ryan Johnson</h4>
        <p className='col-xs-1'></p>
      </div>
      <div className='row text-center'>
        <p className='col-xs-1'></p>
        <div className='col-xs-10'>
          <div id='passportNav' className='passport-nav'>
            {
              this.iconElements = this.icons.map((icon,index)=>{
                return <Icon changeView={this.changeView.bind(this)} key = {icon.title + index} id = {icon.title} icon={icon}/>
              })
            }
          </div>
        </div>
        <div className="col-xs-1">
        </div>
      </div>
      <div className="row">
        <div className="col-xs-1"></div>
        <div id="passportSubPages" className="col-xs-10">
          { this.state.mainContent }
          </div>
          <div className="col-xs-1"></div>
      </div>
      </div>
    );
  }
}

export default Passport;
