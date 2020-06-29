import React from 'react';
import { MultilineFieldProps } from './props';

import { TextInput } from './styles';

const MultilineField: React.FC<MultilineFieldProps> = ({
  placeholder, value, defaultValue, onChangeText,
}) => (
  <TextInput
    placeholder={placeholder}
    value={value}
    defaultValue={defaultValue}
    onChangeText={onChangeText}
  />
);

export default MultilineField;
