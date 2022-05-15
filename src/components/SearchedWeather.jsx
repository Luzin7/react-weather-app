import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/searchedWeather/container.css';
import '../style/searchedWeather/infoBox.css';
import '../style/searchedWeather/tempoInfo.css';
import '../style/searchedWeather/descriptionCard.css';
import '../style/searchedWeather/localeInfo.css';

export default class SearchedWeather extends Component {
  render () {
    const { weatherData } = this.props;
    return (
      <div className="container">
        <div className="info__box">
          <div className="locale">
            <h1>
              {weatherData.name}, <span>{weatherData.sys.country}</span>
            </h1>
          </div>
          <div className="temp__Info">
            <h2>{`${weatherData.main.temp.toFixed(0)}°c`}</h2>
          </div>
          <div className="desc">
            <p>{weatherData.weather[0].description}</p>
          </div>
        </div>
      </div>
    );
  }
}

SearchedWeather.propTypes = {
  weatherData: PropTypes.object.isRequired
};
