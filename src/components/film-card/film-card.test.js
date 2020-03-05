import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";
import {MemoryRouter} from "react-router-dom";

const mockData = {
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
  }
};

it(`<FilmCard /> should render correct`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <FilmCard
            film={mockData.film}
            onHover={() => {}}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
})
;
