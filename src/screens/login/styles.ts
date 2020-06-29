import styled from 'styled-components';
import Screen from '../../components/screen';

export const Container = styled(Screen).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
  },
})`
  padding-vertical: 16px;
  padding-horizontal: 16px;
`;
