import styled from 'styled-components/native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

export const SafeAreaView = styled(RNSafeAreaView)`
  flex: 1;
  background-color: transparent;
`;

export const ScrollView = styled.ScrollView`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;
