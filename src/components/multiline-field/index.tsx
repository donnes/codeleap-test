import React from 'react';
import { MultilineFieldProps } from './props';

import { TextInput } from './styles';

const MultilineField: React.FC<MultilineFieldProps> = ({ placeholder, onChangeText }) => (
  <TextInput placeholder={placeholder} onChangeText={onChangeText} />
);

export default MultilineField;
