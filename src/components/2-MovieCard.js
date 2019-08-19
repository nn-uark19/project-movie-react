import React, { Component } from 'react';
// css
import './2-MovieCard.css';
// photo
import noPhoto from './no-poster.jpg';
// js file
import genres from './3-genre';

var hasPoster, posterUrl;

export class MovieCard extends Component {
  getGenreList(genreList) {
    console.log('class MovieCard- function getGenreList()');
    let genReturn = [];
    genreList.forEach((genId, idx) => {
      console.log(genId);
      console.log(genres[genId]);
    });
  }

  render() {
    console.log('class MovieCard- function render()');
    // poster
    hasPoster = this.props.posterUrl === null ? false : true;
    posterUrl =
      hasPoster === true
        ? 'https://image.tmdb.org/t/p/w500' + this.props.posterUrl
        : noPhoto;
    var genList = this.getGenreList(this.props.genreList);

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

export default MovieCard;
