import React, {Component} from "react";
import PropTypes from "prop-types";
import FilmCard, {filmPropTypes} from "../film-card/film-card.jsx";

class FilmList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeFilm: -1
    };

    this._handleHoverOnFilmCard = this._handleHoverOnFilmCard.bind(this);
  }

  /**
   * @param {Object} film
   */
  _handleHoverOnFilmCard(film) {
    this.setState({
      activeFilm: film
    });
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {this.props.films.length === 0 ?
          <p>Список фильмов пуст</p> :
          this.props.films
                .map((film) => <FilmCard
                  film={film}
                  onHover={this._handleHoverOnFilmCard}
                  key={film.name}
                />)
        }
      </div>
    );
  }
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(filmPropTypes).isRequired
};

export default FilmList;
