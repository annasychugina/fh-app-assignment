import React from 'react';
import {View} from 'react-native';
import {IconButton} from 'react-native-paper';

import {Colors} from '../../shared/lib/theme';
import {Typography} from '../../shared/ui/Typography';
import {styles} from './styles';

const {TitleBold} = Typography;

interface Props {
  key: string;
  count?: number;
  minVal?: number;
  maxVal?: number;
  onSetCount: (number: number, key: string) => any;
}

export const Counter: React.FC<Props> = ({
  key,
  count = 1,
  minVal = 1,
  maxVal = 2,
  onSetCount,
}) => {
  const IncrementButton = () => {
    const onPress = () => {
      if (!maxVal || count < maxVal) {
        onSetCount(count + 1, 'plus');
      }
    };
    return (
      <IconButton
        icon="plus"
        onPress={onPress}
        style={styles.icon}
        color={count === Number(maxVal) ? Colors.paleSky : Colors.blueRibbon}
      />
    );
  };

  const DecrementButton = () => {
    const onPress = () => {
      if (count > minVal) {
        onSetCount(count - 1, key);
      }
    };
    return (
      <IconButton
        icon="minus"
        onPress={onPress}
        style={styles.icon}
        color={count === Number(minVal) ? Colors.paleSky : Colors.blueRibbon}
      />
    );
  };

  return (
    <View style={styles.container}>
      <DecrementButton />
      <View style={styles.content}>
        <TitleBold numberOfLines={1} flexShrink={1} color={Colors.ebonyClay}>
          {count}
        </TitleBold>
      </View>
      <IncrementButton />
    </View>
  );
};
