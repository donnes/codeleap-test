import React from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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

const CareerListItem: React.FC<CareerListItemProps> = ({ career }) => {
  const navigation = useNavigation();

  const handleOnRemove = () => {
    Alert.alert('', 'Are you sure you want to delete this item?', [
      { text: 'Cancel', style: 'cancel', onPress: () => null },
      { text: 'Remove', style: 'destructive', onPress: () => career.remove() },
    ]);
  };

  const handleOnEdit = () => {
    navigation.navigate('CareersEdit', { career });
  };

  return (
    <Container>
      <Header>
        <Title>{career.title}</Title>
        <Actions>
          <Action onPress={handleOnRemove}>
            <MaterialIcons name="delete-forever" size={24} color="white" />
          </Action>
          <Action onPress={handleOnEdit}>
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
};

export default CareerListItem;
