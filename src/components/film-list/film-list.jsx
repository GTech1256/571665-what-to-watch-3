import React, {Component} from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";

class FilmList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indexOfActiveFilm: -1
    };

    this._handleHoverOnFilmCard = this._handleHoverOnFilmCard.bind(this);
  }

  /**
   * @param {number} idx
   */
  _handleHoverOnFilmCard(idx) {
    this.setState({
      indexOfActiveFilm: idx
    });
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {this.props.films.length === 0 ?
          <p>Список фильмов пуст</p> :
          this.props.films
                .map((filmName, idx) => <FilmCard
                  name={filmName}
                  onHover={() => this._handleHoverOnFilmCard(idx)}
                  key={filmName}
                />)
        }
      </div>
    );
  }
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default FilmList;
