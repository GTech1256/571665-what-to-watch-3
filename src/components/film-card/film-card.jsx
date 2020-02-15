import React from "react";
import PropTypes from "prop-types";

const FilmCard = ({
  name,
  onHover
}) => (
  <article
    className="small-movie-card catalog__movies-card"
    onMouseOver={onHover}
  >
    <div className="small-movie-card__image">
      <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt={name} width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{name}</a>
    </h3>
  </article>
);

FilmCard.propTypes = {
  name: PropTypes.string.isRequired,
  onHover: PropTypes.func.isRequired
};

export default FilmCard;
