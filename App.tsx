import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

import {Root} from './app/navigators/Root';
import {Colors} from './shared/lib/theme';
export default function App() {
  return (
    <StyledContainer>
      <NavigationContainer>
        <Container>
          <StatusBar style="auto" />
          <Root />
        </Container>
      </NavigationContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled(SafeAreaView)({
  flex: 1,
  backgroundColor: Colors.white,
});
const Container = styled.View({
  flex: 1,
  backgroundColor: Colors.white,
});
