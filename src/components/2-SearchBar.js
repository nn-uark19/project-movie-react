import React, { Component } from 'react';
import './2-SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    console.log('class SearchBar- constructor()');
    super(props);
    this.state = { query: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log('class SearchBar- function handleChange()');
    this.setState({ query: e.target.value });
  }

  handleSubmit(e) {
    console.log('class SearchBar- function handleSubmit()');
    e.preventDefault();
    this.props.childData(this.state.query);
    this.setState({ query: '' });
  }

  render() {
    console.log('class SearchBar- function render()');
    return (
      <div className='SearchBar'>
        <form onSubmit={this.handleSubmit} className='form-group'>
          <input
            name='query'
            type='text'
            placeholder='Search Movie Title...'
            onChange={this.handleChange}
            value={this.state.query}
            className='form-control SearchBar-input text-center'
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
