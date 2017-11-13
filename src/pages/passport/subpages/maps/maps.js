import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Maps extends Component {
  constructor(props){
    super(props);
    this.state = ({ lat : 34.1941801 , long : -118.59 , zoom : 0 , props : props});
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
  postion(test){
    this.setState({ center :{lat : test.coords.latitude , lng : test.coords.longitude} , zoom : 15 });
  }
  render() {
    return (
      <GoogleMapReact center = {this.state.center} zoom={this.state.zoom} defaultCenter={this.Prop.center} defaultZoom={this.state.zoom}>
        <AnyReactComponent initialCenter={{
            lat:  41.8470,
            lng: 71.2394
          }} text={'Ryan'}>
        </AnyReactComponent>
      </GoogleMapReact>
    );
  }
}

export default Maps;
