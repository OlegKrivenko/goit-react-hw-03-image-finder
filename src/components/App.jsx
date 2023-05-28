import React, { Component } from 'react';

import Searchbar from './Searchbar';
import fetchData from 'services/fetchData';

class App extends Component {
  state = {
    searchQuery: '',
    hits: [],
    page: 1,
    isLoading: false,
    buttonLoading: false,
    showButton: false,
    showModal: false,
    largeImage: '',
    error: '',
  };

  addSerachQuery = query => {
    this.setState({ searchQuery: query });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.addSerachQuery} />
      </div>
    );
  }
}

export default App;
