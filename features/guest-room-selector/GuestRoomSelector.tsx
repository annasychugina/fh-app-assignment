import React from 'react';
import {View} from 'react-native';

import {Button} from '../../shared/ui/Button';
import {Typography} from '../../shared/ui/Typography';
import {IconPlus} from '../../shared/ui/icons';
import {Counter} from './Counter';

const {Title1} = Typography;

const strings = {
  title: 'Room 1',
  buttonTitle: 'Add room',
};

export const GuestRoomSelector = () => {
  return (
    <View>
      <Title1>{strings.title}</Title1>
      <Counter key="adultsCounter" onSetCount={() => {}} />
      <Counter key="childrenCounter" onSetCount={() => {}} />
      <Button secondary title={strings.buttonTitle} leftIcon={<IconPlus />} />
    </View>
  );
};
