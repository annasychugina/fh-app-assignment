import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';

import {GuestRoomSelector} from '../../features/guest-room-selector';
import {selectAllGuestsInfos} from '../../features/guest-room-selector/guestsSlice';
import {selectGuestCount} from '../../features/guest-room-selector/selectors';
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
  const guestCount = useSelector(selectGuestCount);
  const guestsInfos = useSelector(selectAllGuestsInfos);
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
        title={`Search ${guestsInfos?.length} rooms • ${guestCount} guests`}
        onPress={handlePress}
        leftIcon={<IconSearch />}
      />
    </Container>
  );
};
