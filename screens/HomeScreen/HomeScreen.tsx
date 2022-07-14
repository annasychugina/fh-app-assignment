import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback} from 'react';

import {RootStackParamList} from '../../shared/config';
import {Colors} from '../../shared/lib/theme';
import {Button} from '../../shared/ui/Button';
import {Header} from '../../shared/ui/Header';
import {IconClose} from '../../shared/ui/icons';
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
      <Button
        primary
        floating
        title={strings.buttonText}
        onPress={handlePress}
      />
    </Container>
  );
};
