import React, {Component} from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";
import {filmPropTypes} from "../../types.js";

class FilmList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeFilm: null
    };
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {this.props.films.length === 0 ?
          <p>Список фильмов пуст</p> :
          this.props.films
                .map((film) => <FilmCard
                  film={film}
                  onHover={this.props.onFilmClick}
                  key={film.name}
                />)
        }
      </div>
    );
  }
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(filmPropTypes).isRequired,
  onFilmClick: PropTypes.func.isRequired
};

export default FilmList;
