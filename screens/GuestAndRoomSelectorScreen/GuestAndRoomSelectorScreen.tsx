import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';

import {reset} from '../../entities/guests';
import {
  GuestRoomSelector,
  useValidateGuestsInfo,
} from '../../features/guest-room-selector';
import {RootStackParamList} from '../../shared/config';
import {Colors} from '../../shared/lib/theme';
import {Header} from '../../shared/ui/Header';
import {IconClose} from '../../shared/ui/icons';
import {Container} from '../HomeScreen/styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const GuestAndRoomSelectorScreen = ({navigation}: Props) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const validationErrors = useValidateGuestsInfo();
  const handleSearch = useCallback(() => {
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
      <GuestRoomSelector onSearch={handleSearch} />
    </Container>
  );
};
