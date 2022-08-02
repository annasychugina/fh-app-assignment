import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import styled from 'styled-components/native';

import {TranslationProvider} from './app/localization';
import {Root} from './app/navigators/Root';
import {useLoadResources} from './shared/lib/hooks';
import {Colors} from './shared/lib/theme';
import {store} from './shared/store';

export default function App() {
  const isReady = useLoadResources();

  if (!isReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <StyledContainer>
        <TranslationProvider>
          <NavigationContainer>
            <Container>
              <StatusBar style="auto" />
              <Root />
            </Container>
          </NavigationContainer>
        </TranslationProvider>
      </StyledContainer>
    </Provider>
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
