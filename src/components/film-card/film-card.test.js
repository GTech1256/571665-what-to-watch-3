import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

const mockData = {
  film: {name: `Fantastic Beasts`}
};

it(`<FilmCard /> should render correct`, () => {
  const tree = renderer
    .create(<FilmCard
      film={mockData.film}
      onHover={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
})
;
