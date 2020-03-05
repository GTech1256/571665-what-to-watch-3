import React from "react";
import {mount} from "enzyme";
import Main from "./main.jsx";
import {MemoryRouter} from "react-router-dom";

const mockData = {
  filmOnHeader: {
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

it(`Should welcome button be pressed`, () => {
  const handleFilmClick = jest.fn();

  const welcomeScreen = mount(
      <MemoryRouter>
        <Main
          filmOnHeader={mockData.filmOnHeader}
          films={mockData.films}
          onFilmClick={handleFilmClick}
        />
      </MemoryRouter>
  );

  const titleElement = welcomeScreen.find(`h2.movie-card__title`);

  titleElement.props().onClick();

  expect(handleFilmClick.mock.calls.length).toBe(1);
});
