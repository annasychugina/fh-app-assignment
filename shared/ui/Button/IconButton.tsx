import {IconButton as RNPIconButton} from 'react-native-paper';
import styled from 'styled-components/native';

import {Colors} from '../../lib/theme';

export const IconButton = styled(RNPIconButton)({
  borderWidth: 0.8,
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  borderRadius: 4,
  backgroundColor: Colors.aliceBlue,
  borderColor: Colors.tropicalBlue,
});
