import styled from 'styled-components/native';

import {rem} from '../../../../shared/ui/helpers';
export const Container = styled.View({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: 20,
  paddingBottom: rem(4),
});

export const DropDownWrapper = styled.View({
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
});
