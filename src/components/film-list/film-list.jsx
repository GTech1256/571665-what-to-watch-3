import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";
import {filmType} from "../../types.js";

const FilmList = ({
  films,
  onFilmClick,
  limit
}) => {
  const localFilms = films.slice(
      0,
      typeof limit === `number` ?
        limit :
        films.length
  );

  return (
    <div className="catalog__movies-list">
      {localFilms.length === 0 ?
        <p>Список фильмов пуст</p> :
        localFilms.map((film) => <FilmCard
          film={film}
          onClick={onFilmClick}
          key={film.name}
        />)
      }
    </div>
  );
};


FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmType)).isRequired,
  onFilmClick: PropTypes.func.isRequired,
  limit: PropTypes.number
};

export default FilmList;
