import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page";
import {MemoryRouter} from "react-router-dom";

const mock = {
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
  }
};

it(`<MoviePage /> shoult render correct`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <MoviePage {...mock} />
      </MemoryRouter>
  );

  expect(tree).toMatchSnapshot();
});
