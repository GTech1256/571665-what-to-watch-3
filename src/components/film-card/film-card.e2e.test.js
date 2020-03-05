import React from "react";
import {mount} from "enzyme";
import FilmCard from "./film-card";
import {MemoryRouter} from "react-router-dom";

const mock = {
  film: {
    name: `Fantastic Beasts`,
    genre: `fantasy`,
    releaseDate: `2016`,
    rating: 9.9999,
    poster: {
      url: `img/the-grand-budapest-hotel-poster.jpg`,
      name: `POSTER NAME`
    },
    cover: {
      url: `img/bg-the-grand-budapest-hotel.jpg`,
      name: `POSTER NAME`
    }
  },
};

it(`Should call function onHover when the user hovers the mouse over a component <FilmCard /> and return data-object`, () => {
  const {film} = mock;
  const onFilmCardHover = jest.fn();
  const props = {
    film,
    onHover: onFilmCardHover
  };

  const expectFilm = mock.film;

  const filmCard = mount(
      <MemoryRouter>
        <FilmCard
          {...props}
        />
      </MemoryRouter>
  );

  filmCard
    .find(`.small-movie-card.catalog__movies-card`)
    .simulate(`click`);

  // функция обратного вызова была вызвана
  expect(onFilmCardHover).toHaveBeenCalledTimes(1);

  // функция обратного вызова была вызвана с корректным значением
  expect(onFilmCardHover.mock.calls[0][0]).toBe(expectFilm);
});
