import React from 'react';

import { Card, canvas } from '@workday/canvas-kit-react';

import { CanvasDealCard } from './CanvasDealCard';

export class CanvasDealBoard extends React.Component {
  render() {
    const {
      G,
      ...rest
    } = this.props;
    return (
      <div>
        <h2>Remaining Draw Pile: {G.deck.length}</h2>
        <h2>Your Hand : </h2>
          {G.players[this.props.playerID].hand.map(item => {
            return <CanvasDealCard>{item.name}</CanvasDealCard>;
          })}
      </div>
    );
  }
}
