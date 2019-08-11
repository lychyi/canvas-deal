import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@workday/canvas-kit-react-button';

import { CanvasDealCard } from './CanvasDealCard';

export class CanvasDealBoard extends React.Component {

   static propTypes = {
     events: PropTypes.any.isRequired,
   };

  endTurn = () => {
    this.props.events.endTurn();
    };

  render() {
    const {
      G,
      ...rest
    } = this.props;



    return (
      <div>
        <h2>Remaining Draw Pile: {G.deck.length}</h2>
        <Button onClick={this.endTurn}>End Turn</Button>
        <h2>Your Hand:</h2>
        {
          G.players[this.props.playerID].hand.map(item => {
            return <CanvasDealCard>{item.name}</CanvasDealCard>;
          })
        }

      </div>
    );
  }
}
