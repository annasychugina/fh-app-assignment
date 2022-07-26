import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback} from 'react';

import {GuestRoomSelector} from '../../features/guest-room-selector';
import {RootStackParamList} from '../../shared/config';
import {Colors} from '../../shared/lib/theme';
import {Button} from '../../shared/ui/Button';
import {Header} from '../../shared/ui/Header';
import {IconClose, IconSearch} from '../../shared/ui/icons';
import {SelectorWrapper} from '../HomeScreen/HomeScreen';
import {Container} from '../HomeScreen/styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const strings = {
  headerTitle: 'Who is staying?',
  buttonText: 'Search',
};

export const GuestAndRoomSelectorScreen = ({navigation}: Props) => {
  const handlePress = useCallback(() => {
    console.log('PRESS');
  }, []);
  return (
    <Container>
      <Header
        title={strings.headerTitle}
        backIcon={<IconClose color={Colors.blueRibbon} />}
        onBackPress={navigation.goBack}
      />
      <SelectorWrapper>
        <GuestRoomSelector />
      </SelectorWrapper>
      <Button
        primary
        floating
        title={strings.buttonText}
        onPress={handlePress}
        leftIcon={<IconSearch />}
      />
    </Container>
  );
};
