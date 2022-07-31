import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';

import {selectAllGuestsInfos} from '../../features/guest-room-selector/guestsSlice';
import {selectGuestCount} from '../../features/guest-room-selector/selectors';
import {EScreens, RootStackParamList} from '../../shared/config';
import {Colors} from '../../shared/lib/theme';
import {Header} from '../../shared/ui/Header';
import {Logo} from '../../shared/ui/Logo';
import {rem} from '../../shared/ui/helpers';
import {Content, StyledEditButton, StyledInput, StyledTitle} from './styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const HomeScreen = ({navigation}: Props) => {
  const {t} = useTranslation();
  const guestCount = useSelector(selectGuestCount);
  const guestsInfos = useSelector(selectAllGuestsInfos);
  const handleEditPress = useCallback(() => {
    navigation.navigate(EScreens.GUEST_AND_ROOM_SELECTOR_SCREEN);
  }, []);
  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <Content>
        <StyledTitle>{t('home.title')}</StyledTitle>
        <View>
          <StyledInput
            autoComplete={false}
            placeholder=""
            mode="outlined"
            dense
            editable={false}
            outlineColor={Colors.spindle}
            activeOutlineColor={Colors.spindle}
            value={t('home.buttonText', {
              guestCount,
              roomsCount: guestsInfos?.length,
            })}
          />
          <StyledEditButton
            icon="pencil"
            onPress={handleEditPress}
            color={Colors.blueRibbon}
          />
        </View>
      </Content>
    </Container>
  );
};

export const SelectorWrapper = styled.View({
  flex: 1,
  padding: rem(16),
  paddingTop: 0,
  marginBottom: rem(20),
});

export const Container = styled.View({
  backgroundColor: Colors.white,
  width: '100%',
  height: '100%',
});
