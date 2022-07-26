import {Divider} from 'react-native-paper';
import styled from 'styled-components/native';

import {rem} from '../../../../shared/ui/helpers';

export const Container = styled.View({
  flex: 1,
  flexDirection: 'column',
  marginTop: rem(22),
});

export const StyledDivider = styled(Divider)({
  marginTop: rem(20),
});

export const TitleWrapper = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: rem(8),
});
