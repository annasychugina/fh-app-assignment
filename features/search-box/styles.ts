import {Pressable} from 'react-native';
import {TextInput} from 'react-native-paper';
import styled from 'styled-components/native';

import {Colors} from '../../shared/lib/theme';
import {Typography} from '../../shared/ui/Typography';
import {rem} from '../../shared/ui/helpers';

const HEIGHT = rem(56);
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

export const EditWrapper = styled(Pressable)({
  borderWidth: 0.8,
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  borderRadius: 4,
  backgroundColor: Colors.aliceBlue,
  borderColor: Colors.tropicalBlue,
  width: rem(40),
  height: rem(40),
});

export const StyledInput = styled(TextInput)({
  width: '100%',
  justifyContent: 'center',
  backgroundColor: Colors.white,
  height: HEIGHT,
});

export const InputContainer = styled.View({
  flexDirection: 'row',
});

export const AdornmentContainer = styled.View({
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: rem(3),
  paddingRight: rem(10),
});

export const Input = styled.TextInput({
  flex: 1,
});
