import styled from 'styled-components/native';

import {Colors, EShadow, makeShadow} from '../../lib/theme';
import {SafeAreaHeaderWrapper} from './components';

export const Container = styled(SafeAreaHeaderWrapper)({
  flexDirection: 'row',
  paddingRight: 8,
  paddingBottom: 6,
  backgroundColor: Colors.white,
  justifyContent: 'center',
  alignItems: 'center',
  ...makeShadow(EShadow.S, Colors.black),
});

export const StyledContentView = styled.View({
  flex: 1,
  paddingRight: 12,
  marginLeft: 4,
  alignItems: 'center',
});

export const StyledBlock = styled.View({
  paddingLeft: 12,
});
