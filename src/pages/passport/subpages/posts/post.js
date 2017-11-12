import React, { Component } from 'react';
import './post.css';

class Post extends Component {
  render() {
    return (
      <div className='search-container container'>
        <div className='row'>
          <h3 className='col-xs-12 text-center'>My Posts</h3>
        </div>
        <div className='row'>
          <div className='col-xs-1'/>
          <input id="serachInput" className='col-xs-10' placeholder="Search"/>
          <div className='col-xs-1'/>
        </div>

        <div className='row'>
          <div className='col-xs-1'/>
          <div className='col-10-1'>
            fdsafdsa
            fdsafdsaf fdsa fds ajfd sf fklds fldks; af jkl; fdj;
            fdkslafj; fdsa jkl;fds a; fj;kdls j;lf l;k fkl;sdaf;lk
            jfkdsl;a  jklf;kl; aafdsa
          </div>
          <div className='col-xs-1'/>
        </div>
      </div>
    );
  }
}


export default Post;
