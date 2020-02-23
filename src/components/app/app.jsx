import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import {filmPropTypes} from "../film-card/film-card.jsx";

const titleButtonHandler = () => {};

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
