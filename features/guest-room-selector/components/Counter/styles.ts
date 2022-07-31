import styled from 'styled-components/native';

import {rem} from '../../../../shared/ui/helpers';

export const Container = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});

export const ContentWrapper = styled.View({
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: rem(40),
  height: rem(20),
});
