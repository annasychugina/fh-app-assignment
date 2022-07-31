import {TextInput} from 'react-native-paper';
import styled from 'styled-components/native';

import {Colors} from '../../shared/lib/theme';
import {IconButton} from '../../shared/ui/Button';
import {Typography} from '../../shared/ui/Typography';
import {rem} from '../../shared/ui/helpers';

const HEIGHT = 56;
const {Title2} = Typography;

export const Container = styled.View({
  backgroundColor: Colors.white,
  width: '100%',
  height: '100%',
});

export const Content = styled.View(({padding}: {padding: number}) => ({
  justifyContent: 'center',
  padding,
}));

export const StyledTitle = styled(Title2)({
  textAlign: 'center',
  marginBottom: rem(16),
});

export const StyledEditButton = styled(IconButton)({
  position: 'absolute',
  right: rem(0),
  top: rem(8),
  width: rem(40),
  height: rem(40),
});

export const StyledInput = styled(TextInput)({
  width: '100%',
  justifyContent: 'center',
  backgroundColor: Colors.white,
  height: HEIGHT,
});
