import React from 'react';
import styled from '@emotion/styled';
import { canvas } from '@workday/canvas-kit-react';
import { AccentIcon } from '@workday/canvas-kit-react-icon';
import { handMoneyIcon } from '@workday/canvas-accent-icons-web';

const CardBack = styled('div')(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: canvas.colors.pomegranate500,
    padding: canvas.spacing.xxs,
    ...canvas.depth[4],
    border: `${canvas.spacing.xs} solid white`,
    borderRadius: 8
  },
  ({height, width}) => ({
    height: height,
    width: width
  })
);

const CanvasDealCard = () => {
  return (
    <div>
      <CardBack height={350} width={250}>
        <AccentIcon icon={handMoneyIcon} size={180} color={canvas.colors.pomegranate600} />
      </CardBack>
    </div>
  )
}

export { CanvasDealCard };