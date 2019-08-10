import React from 'react';

export class CanvasDealBoard extends React.Component {
  render() {
    const {
      G,
      ...rest
    } = this.props;
    return (
      <div>
        <h2>Used Cards</h2>
        <h2>Remaining Draw Pile: {G.deck.length}</h2>
        <h2>Your Hand</h2>
      </div>
    );
  }
}
