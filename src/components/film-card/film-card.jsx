import React from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import {filmPropTypes} from "../../types";

const FilmCard = ({
  film,
  onHover,
  history
}) => {

  function handleMouseover() {
    onHover(film);
    history.push(`dev-film`);
  }


  return (
    <article
      className="small-movie-card catalog__movies-card"
      onClick={handleMouseover}
    >
      <div className="small-movie-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: filmPropTypes,
  onHover: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired
};

export default withRouter(FilmCard);
