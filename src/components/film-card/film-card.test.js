import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

const mockData = {
  name: `Fantastic Beasts`
};

it(`<FilmCard /> should render correct`, () => {
  const tree = renderer
    .create(<FilmCard
      name={mockData.name}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
})
;
