import React from 'react';
import { ButtonProps } from './props';

import { Touchable, Text } from './styles';

const Button: React.FC<ButtonProps> = ({
  style, text, onPress, disabled,
}) => (
  <Touchable style={style} onPress={onPress} disabled={disabled}>
    <Text>{text}</Text>
  </Touchable>
);

export default Button;
