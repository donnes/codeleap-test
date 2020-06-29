import React from 'react';
import { CareerFormProps } from './props';

import {
  Container, Title, FieldGroup, FieldLabel,
} from './styles';
import TextField from '../text-field';
import MultilineField from '../multiline-field';
import Button from '../button';

const CareerForm: React.FC<CareerFormProps> = ({ onSave }) => (
  <Container>
    <Title>What’s on your mind?</Title>

    <FieldGroup>
      <FieldLabel>Title</FieldLabel>
      <TextField placeholder="Hello world" />
    </FieldGroup>

    <FieldGroup>
      <FieldLabel>Content</FieldLabel>
      <MultilineField placeholder="Content here" />
    </FieldGroup>

    {/* eslint-disable-next-line */}
    <Button style={{ alignSelf: 'flex-end' }} text="Save" onPress={onSave} />
  </Container>
);

export default CareerForm;
