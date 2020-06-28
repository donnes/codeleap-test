import React from 'react';
import { TextFieldProps } from './props';

import { TextInput } from './styles';

const TextField: React.FC<TextFieldProps> = ({ placeholder, onChangeText }) => (
  <TextInput placeholder={placeholder} onChangeText={onChangeText} />
);

export default TextField;
