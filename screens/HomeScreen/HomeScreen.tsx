import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback} from 'react';
import styled from 'styled-components/native';

import {GuestRoomSelector} from '../../features/guest-room-selector';
import {RootStackParamList} from '../../shared/config';
import {Colors} from '../../shared/lib/theme';
import {Button} from '../../shared/ui/Button';
import {Header} from '../../shared/ui/Header';
import {rem} from '../../shared/ui/helpers';
import {IconClose, IconSearch} from '../../shared/ui/icons';
import {Container} from './styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const strings = {
  headerTitle: 'Who is staying?',
  buttonText: 'Search',
};

export const HomeScreen = ({navigation}: Props) => {
  const handlePress = useCallback(() => {
    console.log('PRESS');
  }, []);
  return (
    <Container>
      <Header
        title={strings.headerTitle}
        backIcon={<IconClose color={Colors.blueRibbon} />}
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

export const SelectorWrapper = styled.View({
  flex: 1,
  padding: rem(16),
  marginBottom: rem(20),
});
