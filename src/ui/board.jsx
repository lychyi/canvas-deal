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
        <Card depth={canvas.depth[1]} padding={canvas.spacing.l}>
          Remaining Draw Pile: { G.deck.length }
        </Card>
        <CanvasDealCard />
        <h2>Used Cards</h2>
        <h2>Your Hand</h2>
      </div>
    );
  }
}
