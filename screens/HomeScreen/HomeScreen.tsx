import React from 'react';
import {Text} from 'react-native';
import { RootStackParamList} from '../../shared/config';

import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
    navigation: StackNavigationProp<RootStackParamList>;
};

export const HomeScreen = ({navigation}: Props) => {
    return <Text>Home</Text>
};
