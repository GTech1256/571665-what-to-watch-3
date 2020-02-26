import React from "react";
import {mount} from "enzyme";
import FilmList from "./film-list";
import FilmCard from "../film-card/film-card";

const mock = {
  films: [
    {name: `a`},
    {name: `b`},
    {name: `c`},
    {name: `d`},
    {name: `e`},
    {name: `f`}
  ]
};

it(`Should call function onHover when the user hovers the mouse over a component <FilmCard /> and return data-object`, () => {
  const {films} = mock;
  const props = {
    films
  };

  const supervisionElementIndex = 1;
  const expectFilm = films[supervisionElementIndex];
  const filmCardClassName = `.small-movie-card`;

  const filmList = mount(<FilmList
    {...props}
  />);


  const secondFilm = filmList.find(filmCardClassName).at(supervisionElementIndex);

  secondFilm.simulate(`mouseover`);

  // количество карточек фильмов совпадает с количеством элементов фильмов
  expect(filmList.find(FilmCard)).toHaveLength(mock.films.length);

  // стейт поменялся
  expect(filmList.state(`activeFilm`)).toBe(expectFilm);
});
