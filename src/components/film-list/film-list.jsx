import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";
import {filmType} from "../../types.js";

const FilmList = ({
  films,
  filterByGenre,
  onFilmClick,
  limit
}) => {
  const localFilms = films.slice(
      0,
      typeof limit === `number` ?
        limit :
        films.length
  );

  const filteredFilms = filterByGenre ?
    localFilms.filter((it) => it.genre === filterByGenre) :
    localFilms;

  return (
    <div className="catalog__movies-list">
      {films.length === 0 ?
        <p>Список фильмов пуст</p> :
        filteredFilms.map((film) => <FilmCard
          film={film}
          onClick={onFilmClick}
          key={film.name}
        />)
      }
    </div>
  );
};


FilmList.propTypes = {
  filterByGenre: PropTypes.string,
  films: PropTypes.arrayOf(PropTypes.shape(filmType)).isRequired,
  onFilmClick: PropTypes.func.isRequired,
  limit: PropTypes.number
};

export default FilmList;
