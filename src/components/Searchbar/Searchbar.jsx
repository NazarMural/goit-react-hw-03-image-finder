import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Input } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    searchSubject: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchFirstImages(this.state.searchSubject);
    this.setState({ searchSubject: '' });
  };

  render() {
    return (
      <Header>
        <form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <span>Search</span>
          </Button>

          <Input
            type="text"
            name="searchSubject"
            value={this.state.searchSubject}
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </Header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  fetchFirstImages: PropTypes.func.isRequired,
};
