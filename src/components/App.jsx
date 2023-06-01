import React, { Component } from 'react';

import Searchbar from './Searchbar';
import fetchData from 'services/fetchData';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';

import css from './App.module.css';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    showModal: false,
    largeImageURL: '',
    isLoading: false,
    error: '',
    showLoadMore: false,
    isEmpty: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const newQuery = this.state.searchQuery;
    const prevPage = prevState.page;
    const newPage = this.state.page;

    if (prevQuery !== newQuery || prevPage !== newPage) {
      this.handleGetImages(newQuery, newPage);
    }
  }

  handleGetImages(searchQuery, page) {
    this.setState({ isLoading: true, showLoadMore: false });

    fetchData(searchQuery, page)
      .then(({ hits, totalHits }) => {
        if (hits.length === 0) {
          this.setState({
            isEmpty: true,
          });
          return;
        }
        this.setState({
          images: [...this.state.images, ...hits],
          showLoadMore: this.state.page < Math.ceil(totalHits / 12),
        });
      })
      .catch(error => {
        this.setState({ error: `${error}` });
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  handleFormSubmit = query => {
    this.setState({
      searchQuery: query,
      images: [],
      page: 1,
      showLoadMore: false,
      // status: 'loading',
      isEmpty: false,
      error: '',
    });
  };

  openModal = largeImageURL => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: largeImageURL,
    }));
  };

  closeModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: '',
    }));
  };

  onLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  toggleOnLoading = () => {
    this.setState(({ isLoading }) => ({ isLoading: !isLoading }));
  };

  render() {
    const {
      searchQuery,
      images,
      showModal,
      largeImageURL,
      isLoading,
      error,
      showLoadMore,
      isEmpty,
    } = this.state;

    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {error && <h2 className={css.error}>{error}</h2>}

        {isEmpty && (
          <h2 className={css.error}>
            Sorry, we don`t have image by this query: {searchQuery}
          </h2>
        )}

        <ImageGallery
          images={images}
          openModal={this.openModal}
          toggleOnLoading={this.toggleOnLoading}
        />

        {showLoadMore && <Button onLoadMore={this.onLoadMore} />}

        {isLoading && <Loader />}

        {showModal && (
          <Modal closeModal={this.closeModal} largeImageURL={largeImageURL} />
        )}
      </div>
    );
  }
}

export default App;
