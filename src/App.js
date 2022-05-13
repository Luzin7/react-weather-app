import React from 'react';
import FavoriteWeathers from './components/FavoriteWeathers';
import SearchedWeather from './components/SearchedWeather';
import fetchWeather from './data/api';

export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      localName: 'Recife',
      weatherData: null,
      favoriteLocal: [],
      submited: false
    };
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

  // add um trycatch pra arrumar bug do site quberar quando não acha nada ou pesquisa vazio
  fetchToData = async () => {
    const { localName } = this.state;
    const fetchInfo = await fetchWeather(localName);
    this.setState({ submited: true, weatherData: fetchInfo });
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
              />
              <button onClick={this.fetchToData} type="button">
                Search
              </button>
            </section>
            <section className="city__weather">
              <SearchedWeather weatherData={weatherData} />
              <button onClick={this.addFavorite} type="button">
                Favorite
              </button>
              <FavoriteWeathers favoriteLocal={favoriteLocal} />
            </section>
          </div>
            )
          : (
          <section className="search__city before">
            <input
              className="search"
              onChange={this.handleChange}
              name="localName"
              type="text"
              placeholder="Recife"
            />
            <button onClick={this.fetchToData} type="submit">
              Search
            </button>
          </section>
            )}
      </div>
    );
  }
}
