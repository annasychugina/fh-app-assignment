import DropShadow from 'react-native-drop-shadow';
import styled from 'styled-components/native';

import {Colors} from '../../lib/theme';
import {rem} from '../helpers';
import {SafeAreaHeaderWrapper} from './components';

export const Container = styled(SafeAreaHeaderWrapper)({
  flexDirection: 'row',
  paddingRight: 8,
  paddingBottom: 6,
  backgroundColor: Colors.white,
  justifyContent: 'center',
  alignItems: 'center',
});

export const StyledContentView = styled.View({
  flex: 1,
  paddingRight: rem(12),
  marginLeft: 4,
  alignItems: 'center',
});

export const StyledBlock = styled.View({
  paddingLeft: rem(12),
});

export const DropShadowContainer = styled(DropShadow)({
  shadowColor: Colors.riverBad,
  shadowOpacity: 0.6,
  shadowRadius: 4,
  shadowOffset: {height: 4, width: 0},
});
