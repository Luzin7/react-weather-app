import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/favoriteWeathers/favoriteBox.css';
import '../style/favoriteWeathers/container.css';

export default class FavoriteWeathers extends Component {
  // Chama func com o metodo pra deletar o fav
  removeFav (fav) {
    this.props.removeFav(fav);
  };

  tempoAtual = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `Saved at ${hours}:${minutes}, ${day}/${month}/${year}`;
  };

  render () {
    const { favoriteLocal } = this.props;
    return (
      <div className="container__fav">
        {favoriteLocal.map((favorite) => (
          // Ao clicar a funcao é chamada por uma arrow function
          <div
            onDoubleClick={() => {
              this.removeFav(favorite);
            }}
            key={favorite.id}
            className="info__box"
            id="favorite__box"
          >
            <span className='dateSaved'>{this.tempoAtual()}</span>
            <div className="locale">

              <h1>
                {favorite.name},<span> {favorite.sys.country}</span>
              </h1>
            </div>
            <div className="temp__Info">
              <h2>{`${favorite.main.temp.toFixed(0)}°c`}</h2>
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
  favoriteLocal: PropTypes.arrayOf(Object).isRequired,
  removeFav: PropTypes.func.isRequired
};
