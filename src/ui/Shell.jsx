import React from 'react';
import styled from '@emotion/styled';

import { 
  Avatar,
  canvas,
  IconButton,
  GlobalHeader,
  Layout,
  AccentIcon
} from '@workday/canvas-kit-react';

import {
  beta_type as canvasType
} from '@workday/canvas-kit-react-core';

import {
  inboxIcon,
  notificationsIcon,
  relatedActionsIcon,
} from '@workday/canvas-system-icons-web';

import {
  funIcon,
  handMoneyIcon,
  personBriefcaseIcon,
  personEaselChartIcon,
  personFlagIcon,
  personLoopIcon,
  personSearchIcon,
  personStarIcon
} from '@workday/canvas-accent-icons-web';

import {ReactComponent as EmptyState} from '../assets/emptyState.svg';

const Bg = styled('div')(
  {
    backgroundColor: canvas.colors.blueberry400,
    width: `100%`,
    height: 320
  }
);

const Body = styled('div')(
  {
    position: 'relative',
    maxWidth: 1280,
    margin: `0 auto`,
    top: -180
  }
);

/* Don't have this in Canvas Kit */
const Card = styled('div')(
  {
    backgroundColor: canvas.colors.frenchVanilla100,
    borderRadius: 3,
    padding: canvas.spacing.m,
    ...canvas.depth[2],
    marginBottom: canvas.spacing.s
  }
);

const Centered = styled('div')(
  {
    display: 'flex'
  },
  ({justify = true, align = true}) => ({
    justifyContent: justify ? 'center' : null,
    alignItems: align ? 'center' : null
  })
);

const CardHeader = styled('div')(
  {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: canvas.spacing.s
  }
);

const Grid = styled('div')(
  {
    display: 'grid',
    gridTemplateColumns: `25% 25% 25% 25%`,
    gridTemplateRows: `auto`
  }
)

const PlayerAvatar = (props) => (
  <Centered style={{flexDirection: 'column'}}>
    <AccentIcon icon={props.icon} size={64} />
    <Label>{props.children}</Label>
  </Centered>
);
const Label = styled('p')({...canvasType.variant.label});
export const Shell = (props) => {
  return (
    <div style={{ backgroundColor: canvas.colors.frenchVanilla200, width: `calc(100% - 300px)`}}>
      <GlobalHeader>
        <IconButton icon={notificationsIcon} buttonType={IconButton.Types.Circle} />
        <IconButton icon={inboxIcon} buttonType={IconButton.Types.Circle} />
        <Avatar />
      </GlobalHeader>
      <Bg></Bg>
      <Body>
        <Card>
          <h3 style={{ margin: 0 }}>Welcome, Player 1</h3>
        </Card>
        <Layout gutter={0}>
          <Layout.Column columns={6}>
            <Card>
              <CardHeader>
                <Centered>
                  <AccentIcon icon={handMoneyIcon} size={64} />
                  <div>
                    <Label><strong>Let's Play!</strong></Label>
                  </div>
                </Centered>
                <IconButton icon={relatedActionsIcon} buttonType={IconButton.Types.Plain} />
              </CardHeader>
              <Centered>
                <EmptyState />
              </Centered>
            </Card>
          </Layout.Column>
          <Layout.Column columns={6}>
            <Card>
              <CardHeader>
                <Centered>
                  <AccentIcon icon={funIcon} size={64} />
                  <div>
                    <Label><strong>Players in the Lobby</strong></Label>
                  </div>
                </Centered>
                <IconButton icon={relatedActionsIcon} buttonType={IconButton.Types.Plain} />
              </CardHeader>
                <Grid>
                  {
                    players.map(p => {
                      return <PlayerAvatar icon={p.icon}>Player {p.id}</PlayerAvatar>
                    })
                  }
                </Grid>
            </Card>
          </Layout.Column>
        </Layout>
      </Body>
    </div>
  )
}

const players = [
  {
    id: 1,
    icon: personBriefcaseIcon
  },
  {
    id: 2,
    icon: personEaselChartIcon
  },
  {
    id: 3,
    icon: personFlagIcon
  },
  {
    id: 4,
    icon: personStarIcon
  },
  {
    id: 5,
    icon: personLoopIcon
  },
  {
    id: 6,
    icon: personSearchIcon
  },
]