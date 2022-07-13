import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {GuestAndRoomSelectorScreen} from '../../screens/GuestAndRoomSelectorScreen';
import {HomeScreen} from '../../screens/HomeScreen';
import {EScreens, RootStackParamList} from '../../shared/config';

export const Stack = createStackNavigator<RootStackParamList>();

export const Root = () => {
  return (
    <Stack.Navigator initialRouteName={EScreens.HOME_SCREEN}>
      <Stack.Screen
        name={EScreens.HOME_SCREEN}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={EScreens.GUEST_AND_ROOM_SELECTOR_SCREEN}
        component={GuestAndRoomSelectorScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
