import React from 'react';
import { TextFieldProps } from './props';

import { TextInput } from './styles';

const TextField: React.FC<TextFieldProps> = ({
  placeholder, value, defaultValue, onChangeText,
}) => (
  <TextInput
    placeholder={placeholder}
    value={value}
    defaultValue={defaultValue}
    onChangeText={onChangeText}
  />
);

export default TextField;
