import React from 'react';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';
import { CareerListItemProps } from './props';

import {
  Container, Header,
  Title,
  Actions,
  Action,
  Content,
  AuthorContainer,
  Author,
  CreatedAt,
  Message,
} from './styles';

const CareerListItem: React.FC<CareerListItemProps> = ({ career }) => (
  <Container>
    <Header>
      <Title>{career.title}</Title>
      <Actions>
        <Action>
          <MaterialIcons name="delete-forever" size={24} color="white" />
        </Action>
        <Action>
          <MaterialCommunityIcons name="square-edit-outline" size={24} color="white" />
        </Action>
      </Actions>
    </Header>
    <Content>
      <AuthorContainer>
        <Author>{`@${career.username}`}</Author>
        <CreatedAt>{moment(career.created_datetime).fromNow()}</CreatedAt>
      </AuthorContainer>
      <Message>{career.content}</Message>
    </Content>
  </Container>
);

export default CareerListItem;
