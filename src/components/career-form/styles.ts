import styled from 'styled-components/native';
import { normalize } from '../../utils/normalize';

export const Container = styled.View`
  padding-vertical: 16px;
  padding-horizontal: 16px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  margin-bottom: 22px;
`;

export const Title = styled.Text`
  font-size: ${normalize(18)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 22px;
`;

export const FieldGroup = styled.View`
  margin-bottom: 16px;
`;

export const FieldLabel = styled.Text`
  font-size: ${normalize(16)}px;
  color: ${({ theme }) => theme.colors.black};
`;
