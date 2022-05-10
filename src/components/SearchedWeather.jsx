import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchedWeather extends Component {
  render () {
    const { weatherData } = this.props;
    return (
      <div className="container">
        <div className="info__box">
          <div className="locale">
            <h1>{weatherData.name}</h1>
            <span>{weatherData.sys.country}</span>
          </div>
          <div className="temp__Info">
            <h2>{`${weatherData.main.temp.toFixed(0)}°`}</h2>
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
