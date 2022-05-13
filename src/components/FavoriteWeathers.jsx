import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FavoriteWeathers extends Component {
  render () {
    const { favoriteLocal } = this.props;
    return (
      <div>
        {favoriteLocal.map((favorite) => (
          <h1 key={favorite.id}>{favorite.name}</h1>
        ))}
      </div>
    );
  }
}

FavoriteWeathers.propTypes = {
  favoriteLocal: PropTypes.arrayOf(Object).isRequired
};
