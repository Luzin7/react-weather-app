import React, { Component } from 'react';
import '../style/header.css';
import gitLogo from '../assets/img/GitHub-Mark-Light-32px.png';

export default class Header extends Component {
  // tempoAtual = () => {
  //   setInterval(timer, 1000);

  //   function timer () {
  //     const date = new Date();
  //     const hours = date.getHours();
  //     const minutes = date.getMinutes();
  //     const seconds = date.getSeconds();
  //     const timer = document.querySelector('.timer');

  //     if (seconds < 10) {
  //       timer.textContent = `${hours}:${minutes}:0${seconds}`;
  //     } else if (minutes < 10) {
  //       timer.textContent = `${hours}:0${minutes}:${seconds}`;
  //     } else timer.textContent = `${hours}:${minutes}:${seconds}`;
  //   };
  // };

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
