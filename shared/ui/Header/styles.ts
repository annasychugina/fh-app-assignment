import styled from 'styled-components/native';

import {Colors} from '../../lib/theme';
import {EShadow, makeShadow} from '../../lib/theme/styleGuide';
import {rem} from '../helpers';
import {SafeAreaHeaderWrapper} from './components';

export const Container = styled(SafeAreaHeaderWrapper)({
  flexDirection: 'row',
  paddingRight: 8,
  paddingBottom: 6,
  backgroundColor: Colors.white,
  justifyContent: 'center',
  alignItems: 'center',
  ...makeShadow(EShadow.S),
  shadowRadius: 4,
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
