import React from 'react';
import styled from '@emotion/styled';

import { 
  Avatar,
  canvas,
  IconButton,
  GlobalHeader,
  Layout,
  AccentIcon,
  beta_Button as Button,
} from '@workday/canvas-kit-react';

import {
  beta_type as canvasType
} from '@workday/canvas-kit-react-core';

import {
  inboxIcon,
  notificationsIcon,
  relatedActionsIcon,
  checkCircleIcon,
} from '@workday/canvas-system-icons-web';

import {
  buildingMediumIcon,
  handMoneyIcon,
  personBriefcaseIcon,
  personEaselChartIcon,
  personFlagIcon,
  personLoopIcon,
  personSearchIcon,
  personStarIcon
} from '@workday/canvas-accent-icons-web';

const Bg = styled('div')(
  {
    position: 'absolute',
    backgroundColor: canvas.colors.blueberry400,
    width: `inherit`,
    height: 320,
  }
);

const Body = styled('div')(
  {
    boxSizing: 'border-box',
    position: 'relative',
    maxWidth: 1280,
    margin: `0 auto`,
    marginTop: canvas.spacing.m
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
    gridTemplateRows: `auto`,
    gridRowGap: canvas.spacing.m
  }
)

const PlayerAvatar = ({children, color, icon, size = 48}) => (
  <Centered style={{flexDirection: 'column'}}>
    <AccentIcon color={color} icon={icon} size={size} />
    <Label>{children}</Label>
  </Centered>
);

const Label = styled('p')({...canvasType.variant.label});
export const Shell = (props) => {
  return (
    <div style={{ backgroundColor: canvas.colors.frenchVanilla200, width: `calc(100% - 300px)`, height: `100vh`}}>
      <GlobalHeader>
        <IconButton icon={notificationsIcon} buttonType={IconButton.Types.Circle} />
        <IconButton icon={inboxIcon} buttonType={IconButton.Types.Circle} />
        <Avatar />
      </GlobalHeader>
      <Bg></Bg>
      <Body>
        <Layout gutter={0}>
          <Layout.Column columns={8}>
            <Card>
              <Centered justify={false} style={{ marginBottom: canvas.spacing.l }}>
                <AccentIcon icon={buildingMediumIcon} size={64} />
                <div>
                  <Label><strong>Property Lines</strong></Label>
                </div>
              </Centered>
              {
                players.map(p => {
                  return (
                    <Centered justify={false} style={{ marginBottom: canvas.spacing.m }}>
                      <PlayerAvatar color={p.color} icon={p.icon} key={p.id}>Player {p.id}</PlayerAvatar>
                    </Centered>
                  );
                })
              }
            </Card>
          </Layout.Column>
          <Layout.Column columns={4}>
            <Card>
              <CardHeader>
                <Centered>
                  <AccentIcon icon={handMoneyIcon} size={64} />
                  <div>
                    <Label><strong>n moves remaining</strong></Label>
                  </div>
                </Centered>
                <Button buttonType={Button.Types.OutlinePrimary} icon={checkCircleIcon}>End Turn</Button>
              </CardHeader>
              <Centered>
                {
                  props.G.players[0].hand.map(card => {
                    return <p>{card.name}</p>
                  })
                }
              </Centered>
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
    icon: personBriefcaseIcon,
    color: canvas.colors.watermelon500
  },
  {
    id: 2,
    icon: personEaselChartIcon,
    color: canvas.colors.cinnamon600
  },
  {
    id: 3,
    icon: personFlagIcon,
    color: canvas.colors.toothpaste400
  },
  {
    id: 4,
    icon: personStarIcon,
    color: canvas.colors.islandPunch400
  },
  {
    id: 5,
    icon: personLoopIcon,
    color: canvas.colors.pomegranate400
  },
  {
    id: 6,
    icon: personSearchIcon,
    color: canvas.colors.toastedMarshmallow400
  },
]