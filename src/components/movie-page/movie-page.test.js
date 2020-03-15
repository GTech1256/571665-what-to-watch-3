import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page";
import {MemoryRouter} from "react-router-dom";

const mock = {
  film: {
    name: `Film name`,
    genre: `genre`,
    releaseDate: `date`,
    rating: 10,
    poster: {
      url: `https://via.placeholder.com/150`,
      name: `posterName`
    },
    cover: {
      url: `https://via.placeholder.com/150`,
      name: `coverName`
    },
    preview: {
      url: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    },
  },
  allFilms: [
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
      },
      preview: {
        url: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
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
      },
      preview: {
        url: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
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
      },
      preview: {
        url: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
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
      },
      preview: {
        url: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
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
      },
      preview: {
        url: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
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
      },
      preview: {
        url: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      }
    },
  ],
  onFilmClick: () => {}
};

it(`<MoviePage /> shoult render correct`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <MoviePage {...mock} />
      </MemoryRouter>,
      {
        createNodeMock: () => {
          return {};
        }
      }
  );

  expect(tree).toMatchSnapshot();
});
