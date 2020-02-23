import React from "react";
import PropTypes from "prop-types";

const FilmCard = ({
  film,
  onHover
}) => {
  function handleMouseover() {
    onHover(film);
  }

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={handleMouseover}
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

const filmPropTypes = PropTypes.exact({
  name: PropTypes.string.isRequired
});

FilmCard.propTypes = {
  film: filmPropTypes,
  onHover: PropTypes.func.isRequired
};

export {filmPropTypes};

export default FilmCard;
