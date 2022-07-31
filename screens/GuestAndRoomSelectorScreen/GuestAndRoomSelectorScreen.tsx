import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback} from 'react';
import {useTranslation, Trans} from 'react-i18next';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {GuestRoomSelector} from '../../features/guest-room-selector';
import {
  reset,
  selectAllGuestsInfos,
} from '../../features/guest-room-selector/guestsSlice';
import {useValidateGuestsInfo} from '../../features/guest-room-selector/hooks/useValidateGuestsInfo';
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
  const dispatch = useDispatch();
  const guestCount = useSelector(selectGuestCount);
  const guestsInfos = useSelector(selectAllGuestsInfos);
  const validationErrors = useValidateGuestsInfo();
  const handlePress = useCallback(() => {
    if (validationErrors.childrenAgesErrors.length > 0) {
      Alert.alert(validationErrors.childrenAgesErrors[0].error);
      return;
    }

    navigation.goBack();
  }, [validationErrors]);

  const handleBackPress = () => {
    dispatch(reset());
    navigation.goBack();
  };
  return (
    <Container>
      <Header
        title={t('guestsSelector.headerTitle')}
        backIcon={<IconClose color={Colors.blueRibbon} />}
        onBackPress={handleBackPress}
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
