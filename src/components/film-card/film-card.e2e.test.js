import React from "react";
import {mount} from "enzyme";
import FilmCard from "./film-card";

const mock = {
  film: {name: `a`},
};

it(`Should call function onHover when the user hovers the mouse over a component <FilmCard /> and return data-object`, () => {
  const {film} = mock;
  const onFilmCardHover = jest.fn();
  const props = {
    film,
    onHover: onFilmCardHover
  };

  const expectFilm = mock.film;

  const filmList = mount(<FilmCard
    {...props}
  />);

  filmList.simulate(`mouseover`);

  // функция обратного вызова была вызвана
  expect(onFilmCardHover).toHaveBeenCalledTimes(1);

  // функция обратного вызова была вызвана с корректным значением
  expect(onFilmCardHover.mock.calls[0][0]).toBe(expectFilm);
});
