import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback} from 'react';
import {useTranslation, Trans} from 'react-i18next';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';

import {GuestRoomSelector} from '../../features/guest-room-selector';
import {selectAllGuestsInfos} from '../../features/guest-room-selector/guestsSlice';
import {selectGuestCount} from '../../features/guest-room-selector/selectors';
import {RootStackParamList} from '../../shared/config';
import {Colors} from '../../shared/lib/theme';
import {Button} from '../../shared/ui/Button';
import {Header} from '../../shared/ui/Header';
import {Typography} from '../../shared/ui/Typography';
import {IconClose, IconSearch} from '../../shared/ui/icons';
import {SelectorWrapper} from '../HomeScreen/HomeScreen';
import {Container} from '../HomeScreen/styles';

const {TitleLabel, TitleRegular} = Typography;
type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const GuestAndRoomSelectorScreen = ({navigation}: Props) => {
  const {t} = useTranslation();
  const guestCount = useSelector(selectGuestCount);
  const guestsInfos = useSelector(selectAllGuestsInfos);
  const handlePress = useCallback(() => {
    console.log('PRESS');
  }, []);
  return (
    <Container>
      <Header
        title={t('guestsSelector.headerTitle')}
        backIcon={<IconClose color={Colors.blueRibbon} />}
        onBackPress={navigation.goBack}
      />
      <SelectorWrapper>
        <GuestRoomSelector />
      </SelectorWrapper>
      <Button
        primary
        floating
        onPress={handlePress}
        leftIcon={<IconSearch />}
        title={
          <Trans
            i18nKey="guestsSelector.buttonSearch"
            values={{roomsCount: guestsInfos?.length, guestCount}}
            components={[
              <TitleLabel color={Colors.white} />,
              <TitleRegular color={Colors.white} />,
              <TitleLabel color={Colors.white} />,
              <TitleRegular color={Colors.white} />,
            ]}
          />
        }
      />
    </Container>
  );
};
