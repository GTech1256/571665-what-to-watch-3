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
  },
  preview: {
    url: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  }
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
