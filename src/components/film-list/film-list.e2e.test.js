import React from "react";
import {mount} from "enzyme";
import FilmList from "./film-list";
import FilmCard from "../film-card/film-card";
import {MemoryRouter} from "react-router-dom";

const mock = {
  films: [
    {
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
    {
      name: `The Grand Budapest Hotel`,
      genre: `drama`,
      releaseDate: `2014`,
      rating: 4.55,
      poster: {
        url: `img/the-grand-budapest-hotel-poster.jpg`,
        name: `POSTER NAME`
      },
      cover: {
        url: `img/bg-the-grand-budapest-hotel.jpg`,
        name: `POSTER NAME`
      }
    },
    {
      name: `Bohemian Rhapsody`,
      genre: `GENRE`,
      releaseDate: `2000`,
      rating: 1.595,
      poster: {
        url: `img/the-grand-budapest-hotel-poster.jpg`,
        name: `POSTER NAME`
      },
      cover: {
        url: `img/bg-the-grand-budapest-hotel.jpg`,
        name: `POSTER NAME`
      }
    },
    {
      name: `Macbeth`,
      genre: `GENRE`,
      releaseDate: `2000`,
      rating: 5.1,
      poster: {
        url: `img/the-grand-budapest-hotel-poster.jpg`,
        name: `POSTER NAME`
      },
      cover: {
        url: `img/bg-the-grand-budapest-hotel.jpg`,
        name: `POSTER NAME`
      }
    },
    {
      name: `The Godfather`,
      genre: `GENRE`,
      releaseDate: `2000`,
      rating: 7.7,
      poster: {
        url: `img/the-grand-budapest-hotel-poster.jpg`,
        name: `POSTER NAME`
      },
      cover: {
        url: `img/bg-the-grand-budapest-hotel.jpg`,
        name: `POSTER NAME`
      }
    },
    {
      name: `The Wizard of Oz`,
      genre: `GENRE`,
      releaseDate: `2000`,
      rating: 2.2,
      poster: {
        url: `img/the-grand-budapest-hotel-poster.jpg`,
        name: `POSTER NAME`
      },
      cover: {
        url: `img/bg-the-grand-budapest-hotel.jpg`,
        name: `POSTER NAME`
      }
    },
  ]
};

it(`Should call function onHover when the user hovers the mouse over a component <FilmCard /> and return data-object`, () => {
  const {films} = mock;
  const onFilmClick = jest.fn();

  const props = {
    films,
    onFilmClick
  };

  const supervisionElementIndex = 1;
  const expectFilm = films[supervisionElementIndex];

  const filmList = mount(
      <MemoryRouter>
        <FilmList
          {...props}
        />
      </MemoryRouter>
  );

  // количество карточек фильмов совпадает с количеством элементов фильмов
  expect(filmList.find(FilmCard)).toHaveLength(mock.films.length);

  // симулирует клик на карточку фильма
  filmList
    .find(FilmCard)
    .at(supervisionElementIndex)
    .simulate(`click`);

  // функция обратного вызова была вызвана
  expect(onFilmClick).toHaveBeenCalledTimes(1);

  // функция обратного вызова была вызвана с корректным значением
  expect(onFilmClick.mock.calls[0][0]).toBe(expectFilm);
});
