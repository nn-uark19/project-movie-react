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
        <span className='Footer-text'>Created by Bootstrap v4.3</span>
        <img className='Footer-logo float-right' src={tmdbImg} alt='tmdb logo' />
      </div>
    );
  }
}

export default Footer;
