import Button from 'components/Button';
import ImageGallery from 'components/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import Searchbar from 'components/Searchbar';
import React, { Component } from 'react';
import { Notify } from 'notiflix';
import * as API from 'services/api';

class App extends Component {
  state = {
    images: [],
    searchSubject: '',
    largeImageURL: '',
    showButton: false,
    page: 1,
    isLoading: false,
    openModal: false,
  };

  fetchFirstImages = searchSubject => {
    this.setState({ showButton: false });
    if (searchSubject === '') {
      Notify.info('Ви не ввели тему пошуку!', {
        timeout: 3000,
      });
      return;
    }
    this.setState({ searchSubject: searchSubject, page: 1 }, async () => {
      try {
        this.setState({ images: [], isLoading: true });
        const images = await API.getImages(
          this.state.searchSubject,
          this.state.page
        );
        setTimeout(() => {
          if (images.hits.length < API.getPerPage()) {
            this.setState({ showButton: false });
          } else {
            this.setState({ showButton: true });
          }
          this.setState({ images: images.hits, isLoading: false });
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    });
  };

  fetchMoreImages = () => {
    this.setState({ showButton: false });
    this.setState(
      prevState => {
        return { page: prevState.page + 1 };
      },
      async () => {
        try {
          this.setState({ isLoading: true });
          const images = await API.getImages(
            this.state.searchSubject,
            this.state.page
          );
          setTimeout(() => {
            if (images.hits.length < API.getPerPage()) {
              this.setState({ showButton: false });
            } else {
              this.setState({ showButton: true });
            }
            this.setState(prevState => ({
              images: [...prevState.images, ...images.hits],
              isLoading: false,
            }));
          }, 1000);
        } catch (error) {
          console.log(error);
        }
      }
    );
  };

  changeModalForm = largeImageURL => {
    this.setState({ largeImageURL: largeImageURL, openModal: true });
    document.addEventListener('keydown', this.handleEscapeKey);
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.setState({ openModal: false });
      document.removeEventListener('keydown', this.handleEscapeKey);
    }
  };

  handleEscapeKey = e => {
    if (e.key === 'Escape') {
      this.setState({ openModal: false });
      document.removeEventListener('keydown', this.handleEscapeKey);
    }
  };

  render() {
    const { images, isLoading, openModal } = this.state;
    return (
      <>
        <Searchbar fetchFirstImages={this.fetchFirstImages} />
        <ImageGallery>
          <ImageGalleryItem
            images={images}
            changeModalForm={this.changeModalForm}
          />
        </ImageGallery>
        {isLoading && <Loader />}
        {this.state.showButton && (
          <Button fetchMoreImages={this.fetchMoreImages} />
        )}
        {/* {images.length !== 0 ? (
          <Button fetchMoreImages={this.fetchMoreImages} />
        ) : null} */}
        {openModal && (
          <Modal
            largeImageURL={this.state.largeImageURL}
            handleBackdropClick={this.handleBackdropClick}
          />
        )}
      </>
    );
  }
}

export { App };
