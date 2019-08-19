import React from 'react';
// component
import SearchBar from './2-SearchBar';
import MovieCard from './2-MovieCard';
import ScrollUpButton from "react-scroll-up-button";
// package
const axios = require('axios');

class Movies extends React.Component {
  constructor(props) {
    console.log('class Movies- constructor()');
    super(props);
    this.state = { query: 'avenger', movieList: [] };
    this.childData = this.childData.bind(this);
    this.movieApi = axios.create({
      baseURL: 'https://api.themoviedb.org/3/search/movie',
      timeout: 1000,
      method: 'get'
    });
  }

  async getMovieList() {
    try {
      const response = await this.movieApi.get('', {
        params: {
          api_key: '{api_key}',
          query: this.state.query.replace(' ', '+')
        }
      });
      console.log(response.data.results);
      this.setState({ movieList: response.data.results });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    console.log('class Movies- function componentDidMount()');
    this.getMovieList();
  }

  componentDidUpdate() {
    console.log('class Movies- function componentDidUpdate()');
  }
  componentWillUnmount() {
    console.log('class Movies- function componentWillUnmount()');
  }

  childData(query) {
    console.log(`class Movies- function childData()- argument ${query}`);
    this.setState({ query: query }, () => {
      this.getMovieList();
    });
  }

  render() {
    console.log('class Movies- function render()');
    return (
      <div className='Movies'>
        {/* search bar, props: childData(), return:  */}
        <SearchBar childData={this.childData} />
        {/* display list of movie */}
        <h3 className='text-center mb-5'>Search result for "{this.state.query}"</h3>
        {this.state.movieList.map(m => (
          <MovieCard
            key={m.id}
            title={m.original_title}
            title2={m.title}
            description={m.overview}
            popularity={m.popularity}
            posterUrl={m.poster_path}
            releaseDate={m.release_date}
            voteAvg={m.vote_average}
            voteCount={m.vote_count}
            genreList = {m.genre_ids}
          />
        ))}
        <ScrollUpButton />
      </div>
    );
  }
}
export default Movies;
