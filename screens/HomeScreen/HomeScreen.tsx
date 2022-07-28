import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components/native';

import {EScreens, RootStackParamList} from '../../shared/config';
import {Button} from '../../shared/ui/Button';
import {rem} from '../../shared/ui/helpers';
import {IconGuests} from '../../shared/ui/icons/IconGuests';
import {
  Content,
  ContentWrapper,
  ImageBackDrop,
  StyledLogo,
  StyledTitle,
} from './styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const HomeScreen = ({navigation}: Props) => {
  const {t} = useTranslation();
  const handlePress = useCallback(() => {
    navigation.navigate(EScreens.GUEST_AND_ROOM_SELECTOR_SCREEN);
  }, []);
  return (
    <>
      <ImageBackDrop source={require('../../assets/home.png')}>
        <Content>
          <StyledLogo />
          <StyledTitle>{t('home.title')}</StyledTitle>
          <ContentWrapper>
            <Button
              title={t('home.buttonText')}
              primary
              onPress={handlePress}
              leftIcon={<IconGuests />}
            />
          </ContentWrapper>
        </Content>
      </ImageBackDrop>
    </>
  );
};

export const SelectorWrapper = styled.View({
  flex: 1,
  padding: rem(16),
  paddingTop: 0,
  marginBottom: rem(20),
});
