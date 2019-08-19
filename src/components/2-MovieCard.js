import React, { Component } from 'react';
// css
import './2-MovieCard.css';
// photo
import noPhoto from './no-poster.jpg';
// js file
import genres from './3-genre';

var hasPoster, posterUrl;

export class MovieCard extends Component {
  render() {
    console.log('class MovieCard- function render()');
    // poster
    hasPoster = this.props.posterUrl === null ? false : true;
    posterUrl =
      hasPoster === true
        ? 'https://image.tmdb.org/t/p/w500' + this.props.posterUrl
        : noPhoto;

    return (
      <div className='MovieCard'>
        <div className='row'>
          <div className='col-sm-12 col-md-5'>
            <img className='img-thumbnail' src={posterUrl} alt='text' />
          </div>
          <div className='col-sm-12 col-md-7'>
            <h1 className='text-uppercase font-weight-bold MovieCard-title'>
              {this.props.title}
            </h1>
            <p>Genre: {this.props.genreList}</p>
            <p className='text-justify'>{this.props.description}</p>
            <div className='MovieCard-detail'>
              <div className='row'>
                <div className='col-6'>
                  Popularity
                  <span className='Movie-metaData'>
                    {this.props.popularity}
                  </span>
                </div>
                <div className='col-6'>
                  Release Date
                  <span className='Movie-metaData'>
                    {this.props.releaseDate}
                  </span>
                </div>
                <div className='col-6'>
                  Movie Rating
                  <span className='Movie-metaData'>
                    {this.props.voteAvg} / 10.0
                  </span>
                </div>
                <div className='col-6'>
                  Voting Count{' '}
                  <span className='Movie-metaData'>{this.props.voteCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
