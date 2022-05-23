import React, { Component } from 'react';
import '../style/header.css';
import gitLogo from '../assets/img/GitHub-Mark-Light-32px.png';

export default class Header extends Component {
  render () {
    const date = new Date();
    const year = date.getFullYear();
    return (
      <div className='header'>
        <a data-aos="zoom-in" className='gitLogo' href="https://github.com/Luzin7" target="_blank" rel="noreferrer noopener"><img src={gitLogo} alt="Github Logo" /></a>
        <h1>Weather App</h1>
        <span>&copy; {year} Luan Victor</span>
      </div>
    );
  }
}
