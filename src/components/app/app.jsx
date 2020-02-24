import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import {filmPropTypes} from "../film-card/film-card.jsx";
import MoviePage from "../movie-page/movie-page.jsx";

const titleButtonHandler = () => {};

const devProps = {
  film: {
    name: `NAME`,
    genre: `GENRE`,
    releaseDate: `2000`,
    poster: {
      url: `img/the-grand-budapest-hotel-poster.jpg`,
      name: `POSTER NAME`
    },
    cover: {
      url: `img/bg-the-grand-budapest-hotel.jpg`,
      name: `POSTER NAME`
    }
  }
};

const App = ({
  filmOnHeader,
  films
}) => <BrowserRouter>
  <Switch>
    <Route exact path="/">
      <Main
        filmOnHeader={filmOnHeader}
        films={films}
        onTitleButtonClick={titleButtonHandler}
      />
    </Route>
    <Route exact path="/dev-film">
      <MoviePage {...devProps} />
    </Route>
  </Switch>
</BrowserRouter>;

App.propTypes = {
  filmOnHeader: PropTypes.exact({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired
  }).isRequired,
  films: PropTypes.arrayOf(filmPropTypes).isRequired,
};

export default App;
