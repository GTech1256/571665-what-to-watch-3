import React from "react";
import {mount} from "enzyme";
import FilmList from "./film-list";

const mock = {
  films: [
    `a`,
    `b`,
    `c`,
    `d`,
    `e`,
    `f`
  ]
};

it(`Should call function onHover when the user hovers the mouse over a component <FilmCard /> and return data-object`, () => {
  const {films} = mock;
  const onFilmCardHover = jest.fn();
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
  // expect(secondFilm.render().find(filmCardClassName)).to.have.lengthOf(1);

  // функция обратного вызова была вызвана
  expect(onFilmCardHover).toHaveBeenCalledTimes(1);

  // стейт поменялся
  expect(secondFilm.state(`indexOfActiveFilm`)).toBe(expectFilm);

  // функция обратного вызова вернула корректное значение
  expect(onFilmCardHover.mock.result[0].value).toBe(expectFilm);
});
