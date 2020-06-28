import styled from 'styled-components/native';
import { normalize } from '../../utils/normalize';

export const Touchable = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 33px;
  padding-horizontal: 16px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Text = styled.Text.attrs({
  numberOfLines: 2,
})`
  flex: 1;
  font-size: ${normalize(16)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
`;
