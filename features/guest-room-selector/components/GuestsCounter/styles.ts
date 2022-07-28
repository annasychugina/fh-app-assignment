import styled from 'styled-components/native';

import {rem} from '../../../../shared/ui/helpers';

export const Container = styled.View({
  flex: 1,
});

export const ContentWrapper = styled.View({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const StyledView = styled.View({
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  paddingVertical: rem(2),
  marginRight: -rem(6),
});
