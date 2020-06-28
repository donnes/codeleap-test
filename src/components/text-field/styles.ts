import styled from 'styled-components/native';

export const TextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderColor: theme.colors.gray,
  underlineColorAndroid: 'transparent',
}))`
  min-height: 28px;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;
