import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import { filmType } from "../../types.js";

class App extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      activeFilm: this.props.films[0]
    };

    this._handleClickOnFilm = this._handleClickOnFilm.bind(this);
  }

  _handleClickOnFilm(film) {
    this.setState({
      activeFilm: film
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              filmOnHeader={this.props.filmOnHeader}
              films={this.props.films}
              onFilmClick={this._handleClickOnFilm}
            />
          </Route>
          <Route exact path="/dev-film">
            <MoviePage
              film={this.state.activeFilm}
              allFilms={this.props.films.filter((it) => it.name !== this.state.activeFilm.name)}
              onFilmClick={this._handleClickOnFilm}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  filmOnHeader: PropTypes.shape(filmType),
  films: PropTypes.arrayOf(PropTypes.shape(filmType)).isRequired,
};

export default App;
