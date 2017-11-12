import React, { Component } from 'react';

class Icon extends Component {
  constructor(props ){
    super(props);
    this.glyphClass = 'glyphicon glyphicon-' + props.icon.icon;
  }

  test(id){
    this.props.changeView(id)
  }

  render() {
    return (
      <div onClick={ ()=>{this.test(this.props.id)} } className='passport-nav-item container'>
        <span className={this.glyphClass}></span>
        <p>{this.props.icon.title}</p>
      </div>
    );
  }
  console
}

export default Icon;
/*
ATT-HSS-Provide-O-R-G-Marketing-IDP-C2C
4718 RICHLAND AVENUE

*/
