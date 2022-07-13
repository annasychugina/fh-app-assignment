import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';

import {RootStackParamList} from '../../shared/config';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const HomeScreen = ({navigation}: Props) => {
  return <Text>Home</Text>;
};
