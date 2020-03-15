import React from 'react';
import {mount} from 'enzyme';
import VideoPlayer from './video-player';

const mock = {
  isPlaying: false,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
};

const TIMEOUT = 1000;

jest.setTimeout(30000);

describe(`<VideoPlayer /> should work correct by props`, () => {
  it(`should play video`, () => {
    const videoPlayer = mount(
        <VideoPlayer
          {...mock}
          isPlaying={true}
        />
    ).getDOMNode();

    jest.useFakeTimers();
    setTimeout(() => {
      console.log(videoPlayer.currentTime, "videoPlayer.currentTime");
      expect(videoPlayer.currentTime).not.toBe(0);
    }, TIMEOUT);
    jest.runAllTimers();
  });

  it(`should not play video`, (done) => {
    const videoPlayer = mount(
        <VideoPlayer
          {...mock}
          isPlaying={false}
        />
    ).getDOMNode();

    setTimeout(() => {
      expect(videoPlayer.currentTime).toBe(0);
      done();
    }, TIMEOUT);
  });
});
