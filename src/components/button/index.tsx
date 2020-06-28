import React from 'react';
import { ButtonProps } from './props';

import { Touchable, Text } from './styles';

const Button: React.FC<ButtonProps> = ({ text, onPress }) => (
  <Touchable onPress={onPress}>
    <Text>{text}</Text>
  </Touchable>
);

export default Button;
