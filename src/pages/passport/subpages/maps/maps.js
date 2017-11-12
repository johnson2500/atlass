import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Maps extends Component {
  constructor(props){
    super(props);
    this.state = props;
    this.Prop = {
      center: {lat: 41.8470, lng:-71.2394},
      zoom: 15
    }
    console.log(navigator.geolocation.getCurrentPosition(this.postion))
    this.adjustMap();
  }
  adjustMap(){
    var map = document.getElementById('passportSubPages');
    var width = map.offsetWidth;
    map.style.height = width/2 + "px";
  }
  postion(test){
    console.log(test.coords.latitude, test.coords.longitude);
  }
  render() {
    return (
      <GoogleMapReact defaultCenter={this.Prop.center} defaultZoom={this.Prop.zoom}>
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
