import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './footer/footer.js';
import Header from './header/header.js';
import Feed from './pages/feed/feed.js';
import Passport from './pages/passport/passport.js';
import Search from './pages/search/search.js';
import Places from './pages/places/place.js';
import './jquery-lite.js';
//import Passport from './pages/passport/passport.js';

class App extends Component {
  constructor(){
    super();
    this.state = { mainContent : <Passport/>}
  }

  changeView(name){
    switch(name){
      case 'Feed':
        this.content = <Feed/>;
        break;
      case 'Places':
        this.content = <Places/>;
        break;
      case 'Search':
        this.content = <Search/>;
        break;
      case 'Passport':
        this.content = <Passport/>;
        break;
      default:
        break;
    }
    this.setState({mainContent:this.content})
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
          { this.state.mainContent }
        <Footer changeView={this.changeView.bind(this)}></Footer>
      </div>
    );
  }
}

export default App;
