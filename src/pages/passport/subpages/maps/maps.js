import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MyGreatPlace from './mygreatplace.js'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Maps extends Component {
  constructor(props){
    super(props);
    this.state = ({ lat : 34.1941801 , long : -118.59 , zoom : 0 , props : props, center : { lat : 0 , lng : 0 }});
    this.Prop = {
      center: {lat: this.state.lat, lng:this.state.long},
      zoom: 0
    }
    navigator.geolocation.getCurrentPosition(this.postion.bind(this));
    this.adjustMap();
  }
  adjustMap(){
    var map = document.getElementById('passportSubPages');
    var width = map.offsetWidth;
    map.style.height = width/1.2 + "px";
  }

  dropPins(){

  }

  postion(test){
    this.setState({ center :{lat : test.coords.latitude , lng : test.coords.longitude} , zoom : 15 });
  }
  render() {
    return (
      <GoogleMapReact center = {this.state.center} zoom={this.state.zoom} defaultCenter={this.Prop.center} defaultZoom={this.state.zoom}>
        <MyGreatPlace lat={this.state.center.lat} lng={this.state.center.lng} text={'A'} /* Kreyser Avrora */ />
      </GoogleMapReact>
    );
  }
}

export default Maps;
