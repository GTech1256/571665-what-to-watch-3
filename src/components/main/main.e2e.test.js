import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockData = {
  filmOnHeader: {
    name: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: `2014`
  },
  films: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`]
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
