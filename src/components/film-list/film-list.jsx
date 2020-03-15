import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import { filmType } from "../../types.js";

const FilmList = ({films, filterByGenre, onFilmClick}) => {
  const filteredFilms = filterByGenre ?
    films.filter((it) => it.genre === filterByGenre) :
    films;

  return (
    <div className="catalog__movies-list">
      {films.length === 0 ?
        <p>Список фильмов пуст</p> :
        filteredFilms.slice().map((film) => <FilmCard
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
  onFilmClick: PropTypes.func.isRequired
};

export default FilmList;
