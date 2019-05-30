import React, { Component } from 'react';
import Pets from '../components/Pets/Pets';
import pets from '../assets/pets.json';

export default class PetsPage extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    this.setState({ items: pets });
  }

  render() {
    const { items } = this.state;

    return <Pets items={items} />;
  }
}
