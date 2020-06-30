import styled from 'styled-components/native';
import { normalize } from '../../utils/normalize';

export const Container = styled.View`
  border-color: ${({ theme }) => theme.colors.border};
  border-width: 1px;
  margin-bottom: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-vertical: 16px;
  padding-left: 16px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  flex: 1;
  font-size: ${normalize(16)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  padding-right: 8px;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Action = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 40, left: 20, bottom: 60, right: 20,
  },
})`
  width: 40px;
`;

export const Content = styled.View`
  padding-vertical: 16px;
  padding-horizontal: 16px;
`;

export const AuthorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Author = styled.Text`
  font-size: ${normalize(14)}px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const CreatedAt = styled.Text`
  font-size: ${normalize(14)}px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Message = styled.Text`
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.black};
`;
