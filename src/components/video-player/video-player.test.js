import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";

const mock = {
  isPlaying: false,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
};

it(`<VideoPlayer /> shoult render correct`, () => {
  const tree = renderer.create(
      <VideoPlayer {...mock} />,
      {
        createNodeMock: () => ({})
      }
  );

  expect(tree).toMatchSnapshot();
});
