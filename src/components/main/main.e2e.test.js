import React from "react";
import {shallow} from "enzyme";
import Main from "./main.jsx";

const mockData = {
  filmOnHeader: {
    name: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: `2014`
  },
  films: [
    {name: `a`},
    {name: `b`},
    {name: `c`},
    {name: `d`},
    {name: `e`},
    {name: `f`}
  ]
};

it(`Should welcome button be pressed`, () => {
  const onTitleButtonClick = jest.fn();

  const welcomeScreen = shallow(
      <Main
        filmOnHeader={mockData.filmOnHeader}
        films={mockData.films}
        onTitleButtonClick={onTitleButtonClick}
      />
  );

  const titleElement = welcomeScreen.find(`h2.movie-card__title`);

  titleElement.props().onClick();

  expect(onTitleButtonClick.mock.calls.length).toBe(1);
});
