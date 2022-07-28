import {IconButton} from 'react-native-paper';
import styled from 'styled-components/native';

import {Colors} from '../../../../shared/lib/theme';
import {rem} from '../../../../shared/ui/helpers';

export const StyledIconButton = styled(IconButton)({
  borderWidth: 0.8,
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  borderRadius: 4,
  backgroundColor: Colors.aliceBlue,
  borderColor: Colors.tropicalBlue,
});

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
