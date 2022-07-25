import {StyleSheet} from 'react-native';

import {Colors} from '../../shared/lib/theme';
import {rem} from '../../shared/ui/helpers';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 4,
    backgroundColor: Colors.aliceBlue,
    borderColor: Colors.blueRibbon,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: rem(40),
    height: rem(20),
  },
});
