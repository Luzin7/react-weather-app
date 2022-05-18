import React from 'react';
import FavoriteWeathers from './components/FavoriteWeathers';
import SearchedWeather from './components/SearchedWeather';
import fetchWeather from './data/api';
import './style/app/searchCity.css';
import './style/app/weatherCity.css';
import './style/app/button.css';
import './style/app/buttonSearch.css';
import './style/app/buttonFavorite.css';

export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      localName: 'Recife',
      weatherData: null,
      favoriteLocal: [],
      submited: false
    };
    // Binda func removeFav
    this.removeFav = this.removeFav.bind(this);
  }

  // Pegando o valor do target
  handleChange = ({ target }) => {
    // extraindo name e value de target
    const { name, value } = target;
    const caps = (str) => {
      return str.charAt(0).toUpperCase() + str.substr(1);
    };
    // atualizando 'localName' com o valor da 'name'
    this.setState({ [name]: caps(value) });
  };

  addFavorite = () => {
    const { weatherData } = this.state;

    this.setState((prevstate) => ({
      favoriteLocal: [...prevstate.favoriteLocal, weatherData]
    }));
  };

  // Cria função pra tirar favorito
  removeFav (fav) {
    this.setState({
      favoriteLocal: this.state.favoriteLocal.filter(el => el !== fav)
    });
  }

  // refatorar essa função
  fetchToData = async () => {
    const { localName } = this.state;
    const fetchInfo = await fetchWeather(localName);
    const inputText = document.querySelector('.search');
    const bg = document.querySelector('body');
    if (fetchInfo.cod === 200) {
      this.setState({ submited: true, weatherData: fetchInfo });
      bg.classList.remove('bg__error');
    } else if (fetchInfo.cod !== 200) {
      inputText.placeholder = fetchInfo.message;
      inputText.value = '';
      bg.classList.add('bg__error');
      bg.classList.remove('warm' && 'cold');
    }
    if (fetchInfo.main.temp > 24) {
      bg.classList.add('warm');
      bg.classList.remove('cold');
    }
    if (fetchInfo.main.temp < 24) {
      bg.classList.add('cold');
      bg.classList.remove('warm');
    }
  };

  // revisar esse ternário aí
  render () {
    const { weatherData, favoriteLocal, submited } = this.state;
    return (
      <div className="App">
        {submited
          ? (
          <div className="weather__app">
            <section className="search__city">
              <input
                className="search"
                onChange={this.handleChange}
                name="localName"
                type="text"
                placeholder="Tell me where..."
              />
              <button
                className="button button__search"
                onClick={this.fetchToData}
                type="submit"
              >
                Search
              </button>
            </section>
            <section className="city__weather">
              <SearchedWeather weatherData={weatherData} />
              <button
                className="button button__favorite"
                onClick={this.addFavorite}
                type="button"
              >
                Favorite
              </button>
              <FavoriteWeathers removeFav={this.removeFav} favoriteLocal={favoriteLocal} />
            </section>
          </div>
            )
          : (
          <section className="search__city">
            <input
              className="search"
              onChange={this.handleChange}
              name="localName"
              type="text"
              placeholder="Recife"
            />
            <button
              className="button button__search"
              onClick={this.fetchToData}
              type="submit"
            >
              Search
            </button>
          </section>
            )}
      </div>
    );
  }
}
