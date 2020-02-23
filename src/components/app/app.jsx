import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import {filmPropTypes} from "../film-card/film-card.jsx";

const titleButtonHandler = () => {};

const App = ({
  filmOnHeader,
  films
}) => <Main
  filmOnHeader={filmOnHeader}
  films={films}
  onTitleButtonClick={titleButtonHandler}
/>;

App.propTypes = {
  filmOnHeader: PropTypes.exact({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired
  }).isRequired,
  films: PropTypes.arrayOf(filmPropTypes).isRequired,
};

export default App;
