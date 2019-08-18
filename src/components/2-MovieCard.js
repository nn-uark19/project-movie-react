import React, { Component } from 'react';
import './2-MovieCard.css';

export class MovieCard extends Component {
  render() {
    console.log('class MovieCard- function render()');
    return (
      <div className='MovieCard'>
        <p>{this.props.title}</p>
        <p>{this.props.title2}</p>
        <p className='text-justify'>{this.props.description}</p>
        <p>{this.props.popularity}</p>
        <p>{this.props.posterUrl}</p>
        <p>{this.props.releaseDate}</p>
        <p>{this.props.voteAge}</p>
        <p>{this.props.voteCount}</p>
      </div>
    )
  }
}

// key={m.id}
// title={m.original_title}
// title2={m.title}
// description={m.overview}
// popularity={m.popularity}
// posterUrl={m.poster_path}
// releaseDate={m.release_date}
// voteAvg={m.vote_average}
// voteCount={m.vote_count}

export default MovieCard;
