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
    },
    preview: {
      url: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    }
  }
};

it(`<FilmCard /> should render correct`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <FilmCard
            film={mockData.film}
            onClick={() => {}}
          />
        </MemoryRouter>,
        {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
})
;
