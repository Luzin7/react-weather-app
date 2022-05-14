import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FavoriteWeathers extends Component {
  render () {
    const { favoriteLocal } = this.props;
    return (
      <div className="container">
        {favoriteLocal.map((favorite) => (
          <div key={favorite.id} className="favorite__box">
            <div className="locale">
              <h1>{favorite.name} <span>{favorite.sys.country}</span></h1>
            </div>
            <div className="temp__Info">
              <h2>{`${favorite.main.temp.toFixed(0)}°`}</h2>
            </div>
            <div className="desc">
              <p>{favorite.weather[0].description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

FavoriteWeathers.propTypes = {
  favoriteLocal: PropTypes.arrayOf(Object).isRequired
};
