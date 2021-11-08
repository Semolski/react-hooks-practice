import React, { useState } from 'react';

import Card from '../card/card.component';

const UseStateExample = () => {
  const [name, setName] = useState('Pawel');
  const [address, setAddress] = useState('Colchester, UK');

  return (
    <Card>
      <h1> {name} </h1>
      <h1> {address} </h1>
      <button onClick={() => setName('Sarah')}>Set Name to Sarah</button>
      <button onClick={() => setAddress('Missouri, USA')}>Set Address</button>
    </Card>
  );
};

export class StateClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'Sara',
      address: 'Missouri, USA'
    };
  }

  render() {
    return (
      <Card>
        <h1> {this.state.name} </h1>
        <button onClick={this.setState({ name: 'Pawel' })}>
          Set Name to Sarah
        </button>
        <button onClick={this.setState({ address: 'Colchester, UK' })}>
          Set Address
        </button>
      </Card>
    );
  }
}

export default UseStateExample;
