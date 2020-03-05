import React from "react";
import renderer from "react-test-renderer";
import FilmList from "./film-list";
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
    }
  ]
};

it(`<FilmList /> shoult render correct`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <FilmList
            films={mock.films}
            onFilmClick={() => {}}
          />
        </MemoryRouter>
    );

  expect(tree).toMatchSnapshot();
})
;
