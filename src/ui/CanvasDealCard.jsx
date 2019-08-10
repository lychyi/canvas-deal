import React, { useState } from 'react';
import styled from '@emotion/styled';
import { canvas } from '@workday/canvas-kit-react';
import { AccentIcon } from '@workday/canvas-kit-react-icon';
import { handMoneyIcon } from '@workday/canvas-accent-icons-web';

const Card = styled('div')(
  {
    display: 'inline-block',
    ...canvas.depth[4],
    border: `${canvas.spacing.xs} solid white`,
    borderRadius: 8
  },
  ({width}) => ({
    height: 1.4 * width,
    width: width
  })
);

const CardBack = styled('div')(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: canvas.colors.pomegranate500,
    height: `100%`,
    width: `100%`
  },
  
);

const CardFront = styled('div')(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: canvas.colors.frenchVanilla200,
    height: `100%`,
    width: `100%`
  }
);

const CanvasDealCard = (props) => {
  const [flipped, setFlipped] = useState(false);

  const width = 120;

  const flip = () => {
    setFlipped(!flipped);
  }

  return (
    <Card onClick={flip} width={width}>
      {
        !flipped ?
        <CardBack>
          <AccentIcon icon={handMoneyIcon} size={.8 * width} color={canvas.colors.pomegranate600} />
        </CardBack>
        :
        <CardFront>
          { props.children }
        </CardFront>
      }
    </Card>
  )
}

export { CanvasDealCard };