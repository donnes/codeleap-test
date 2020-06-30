import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useObserver } from 'mobx-react-lite';
import TextField from '../../components/text-field';
import Button from '../../components/button';

import { Title, FieldGroup, FieldLabel } from '../../components/career-form/styles';
import { Container } from './styles';
import { useStores } from '../../models';

const Login:React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<{ 'CareersList': any }>>();
  const { userStore } = useStores();
  const [usernameValue, setUsernameValue] = useState('');

  const handleOnUsernameChange = (value: string) => {
    setUsernameValue(value);
  };

  const handleOnEnter = () => {
    userStore.login(usernameValue);
    navigation.replace('CareersList');
  };

  return useObserver(() => (
    <Container>
      <Title>Welcome to CodeLeap network!</Title>

      <FieldGroup>
        <FieldLabel>Please enter your username</FieldLabel>
        <TextField
          placeholder="Please enter your username"
          value={usernameValue}
          onChangeText={handleOnUsernameChange}
        />
      </FieldGroup>

      <Button
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ alignSelf: 'flex-end' }}
        text="Enter"
        disabled={!usernameValue}
        onPress={handleOnEnter}
      />
    </Container>
  ));
};

export default Login;
