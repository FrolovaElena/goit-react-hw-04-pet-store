import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import Pet from '../components/Pet/Pet';
import items from '../assets/pets.json';

const getItem = id => items.find(item => item.id === id);

export default class PetPage extends Component {
  static propTypes = {
    history: propTypes.shape().isRequired,
    location: propTypes.shape().isRequired,
    match: propTypes.shape().isRequired,
  };

  state = { item: null, data: false };

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const selectedItem = getItem(id);

    this.setState({ item: selectedItem, data: true });
  }

  handleGoBack = () => {
    const { history, location } = this.props;

    if (location.state) {
      return history.push(location.state.from);
    }
    return history.push('/pets');
  };

  render() {
    const { item, data } = this.state;

    return (
      <Fragment>
        {data ? <Pet {...item} onClick={this.handleGoBack} /> : null}
      </Fragment>
    );
  }
}
