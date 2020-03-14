import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";
import MoviePage from "../movie-page/movie-page.jsx";

const FilmList = ({films, onFilmClick}) => (
  <div className="catalog__movies-list">
    {films.length === 0 ?
      <p>Список фильмов пуст</p> :
      films.map((film) => <FilmCard
        film={film}
        onClick={onFilmClick}
        key={film.name}
      />)
    }
  </div>
);

FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(MoviePage.propTypes)).isRequired,
  onFilmClick: PropTypes.func.isRequired
};

export default FilmList;
