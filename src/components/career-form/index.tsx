import React, { useState } from 'react';
import { CareerFormProps } from './props';

import {
  Container, Title, FieldGroup, FieldLabel,
} from './styles';
import TextField from '../text-field';
import MultilineField from '../multiline-field';
import Button from '../button';

const CareerForm: React.FC<CareerFormProps> = ({
  title, onSave, initialValues, submitting = false,
}) => {
  const [titleValue, setTitleValue] = useState('');
  const [contentValue, setContentValue] = useState('');

  const handleOnTitleValueChange = (value: string) => {
    setTitleValue(value);
  };

  const handleOnContentValueChange = (value: string) => {
    setContentValue(value);
  };

  const handleOnSave = async () => {
    await onSave(titleValue, contentValue);
    setContentValue('');
    setTitleValue('');
  };

  const isButtonDisabled = submitting || !titleValue || !contentValue;

  return (
    <Container>
      <Title>{title}</Title>

      <FieldGroup>
        <FieldLabel>Title</FieldLabel>
        <TextField
          placeholder="Hello world"
          value={titleValue}
          defaultValue={initialValues?.title}
          onChangeText={handleOnTitleValueChange}
        />
      </FieldGroup>

      <FieldGroup>
        <FieldLabel>Content</FieldLabel>
        <MultilineField
          placeholder="Content here"
          value={contentValue}
          defaultValue={initialValues?.content}
          onChangeText={handleOnContentValueChange}
        />
      </FieldGroup>

      <Button
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ alignSelf: 'flex-end' }}
        text="Save"
        onPress={handleOnSave}
        disabled={isButtonDisabled}
      />
    </Container>
  );
};

export default CareerForm;
