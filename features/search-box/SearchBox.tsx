import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import {selectGuestCount, selectAllGuestsInfos} from '../../entities/guests';
import {Colors} from '../../shared/lib/theme';
import {rem} from '../../shared/ui/helpers';
import {Content, StyledEditButton, StyledInput, StyledTitle} from './styles';

type Props = {
  padding?: number;
  onEdit: () => void;
};

export const SearchBox = ({padding = rem(16), onEdit}: Props) => {
  const {t} = useTranslation();
  const guestCount = useSelector(selectGuestCount);
  const guestsInfos = useSelector(selectAllGuestsInfos);

  return (
    <Content padding={padding}>
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
          value={t('searchButtonText', {
            guestCount,
            roomsCount: guestsInfos?.length,
          })}
        />
        <StyledEditButton
          icon="pencil"
          onPress={onEdit}
          color={Colors.blueRibbon}
        />
      </View>
    </Content>
  );
};
