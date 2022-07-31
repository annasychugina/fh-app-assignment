import {NavigationContainer} from '@react-navigation/native';
import {configureStore} from '@reduxjs/toolkit';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {combineReducers} from 'redux';
import styled from 'styled-components/native';

import {TranslationProvider} from './app/localization';
import {Root} from './app/navigators/Root';
import {guestsReducer} from './entities/guests';
import {RootState} from './entities/types';
import {Colors} from './shared/lib/theme';

export const rootReducer = combineReducers<RootState>({
  guests: guestsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default function App() {
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
