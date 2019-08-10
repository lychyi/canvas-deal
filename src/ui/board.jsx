import React from 'react';

export class CanvasDealBoard extends React.Component {

  render() {
    const {
      G,
      ...rest
    } = this.props;

    function onEndClick() {
    //  this.props.events.endTurn();
    }

    return (
      <div>
        <h2>Used Cards</h2>
        <h2>Remaining Draw Pile: {G.deck.length}</h2>
        <h2>Your Hand : </h2>
          <ul>
            {G.players[this.props.playerID].hand.map(item => {
              return <li>{item.name}</li>;
            })}
          </ul>

          <button onClick={onEndClick()}>End Turn</button>
      </div>
    );
  }
}
