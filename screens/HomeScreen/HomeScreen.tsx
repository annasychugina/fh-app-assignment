import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback} from 'react';

import {SearchBox} from '../../features/search-box';
import {EScreens, RootStackParamList} from '../../shared/config';
import {Header} from '../../shared/ui/Header';
import {Logo} from '../../shared/ui/Logo';
import {Container} from './styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const HomeScreen = ({navigation}: Props) => {
  const handleEditPress = useCallback(() => {
    navigation.navigate(EScreens.GUEST_AND_ROOM_SELECTOR_SCREEN);
  }, []);
  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <SearchBox onEdit={handleEditPress} />
    </Container>
  );
};
