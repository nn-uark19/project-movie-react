import React, { Component } from 'react';
// image
import tmdbImg from './tmdb.png';
// css
import './1-Footer.css';

export class Footer extends Component {
  render() {
    console.log('class Footer- function render()');
    return (
      <div className='Footer'>
        <img className='Footer-logo float-left' src={tmdbImg} alt='tmdb logo' />
        <span className='Footer-text d-block'>Created with Bootstrap v4.3</span>
      </div>
    );
  }
}

export default Footer;
