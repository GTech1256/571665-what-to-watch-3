import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import MoviePage from "../movie-page/movie-page.jsx";
import VideoPlayer from "../video-player/video-player.jsx";

let currentTimeout = null;
const TIMEOUT_DELAY = 1000; // 1s

function clearVideoDelayedPlayback() {
  if (currentTimeout) {
    clearTimeout(currentTimeout);
  }
}

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isVideoPlaying: false
    };

    this.handleCardClick = this.handleCardClick.bind(this);
    this.handleMouseover = this.handleMouseover.bind(this);
    this.startVideoPlaying = this.startVideoPlaying.bind(this);
    this.stopVideoPlaying = this.stopVideoPlaying.bind(this);
  }

  handleCardClick() {
    const {onClick, film} = this.props;

    onClick(film);
    this.props.history.push(`dev-film`);
  }

  handleMouseover() {
    clearVideoDelayedPlayback();

    currentTimeout = setTimeout(this.startVideoPlaying, TIMEOUT_DELAY);
  }

  startVideoPlaying() {
    this.setState({
      isVideoPlaying: true
    });
  }

  stopVideoPlaying() {
    clearVideoDelayedPlayback();

    this.setState({
      isVideoPlaying: false
    });
  }


  render() {
    const {handleCardClick, handleMouseover, stopVideoPlaying} = this;
    const {film} = this.props;
    const {isVideoPlaying} = this.state;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onClick={handleCardClick}
        onMouseOver={handleMouseover}
        onMouseLeave={stopVideoPlaying}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            poster={film.poster.url}
            src={film.preview.url}
            isPlaying={isVideoPlaying}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
        </h3>
      </article>
    );
  }
}

FilmCard.propTypes = {
  film: PropTypes.shape(MoviePage.propTypes),
  onClick: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(FilmCard);
