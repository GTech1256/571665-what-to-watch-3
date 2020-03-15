import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  componentDidMount() {
    const {src, isPlaying, isMuted = true} = this.props;
    const video = this._videoRef.current;

    video.src = src;
    video.muted = isMuted;

    if (isPlaying) {
      video.play();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.src = ``;
  }

  render() {
    const {src, poster} = this.props;

    return <video
      ref={this._videoRef}
      src={src}
      poster={poster}
      width="280"
      height="175"
    />;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default VideoPlayer;
