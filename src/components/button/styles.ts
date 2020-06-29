import styled from 'styled-components/native';
import { normalize } from '../../utils/normalize';

export const Touchable = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 20, bottom: 20, right: 20, left: 20,
  },
})`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 33px;
  padding-horizontal: 16px;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const Text = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: ${normalize(16)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
`;
