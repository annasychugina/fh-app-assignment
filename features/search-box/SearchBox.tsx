import React from 'react';
import {useTranslation} from 'react-i18next';
import {IconButton} from 'react-native-paper';
import {useSelector} from 'react-redux';

import {selectGuestCount, selectAllGuestsInfos} from '../../entities/guests';
import {Colors} from '../../shared/lib/theme';
import {rem} from '../../shared/ui/helpers';
import {
  Content,
  EditWrapper,
  StyledInput,
  StyledTitle,
  AdornmentContainer,
  InputContainer,
  Input,
} from './styles';

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
        render={inputProps => (
          <InputContainer>
            <Input {...inputProps} />
            <AdornmentContainer>
              <EditWrapper onPress={onEdit}>
                <IconButton icon="pencil" color={Colors.blueRibbon} />
              </EditWrapper>
            </AdornmentContainer>
          </InputContainer>
        )}
      />
    </Content>
  );
};
