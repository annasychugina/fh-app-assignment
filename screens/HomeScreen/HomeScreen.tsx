import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

import {RootStackParamList} from '../../shared/config';
import {Colors} from '../../shared/lib/theme';
import {Header} from '../../shared/ui/Header';
import {IconClose} from '../../shared/ui/icons';
import {Container} from './styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const HomeScreen = ({navigation}: Props) => {
  return (
    <Container>
      <Header
        title="Who is staying?"
        backIcon={<IconClose color={Colors.blueRibbon} />}
      />
    </Container>
  );
};
