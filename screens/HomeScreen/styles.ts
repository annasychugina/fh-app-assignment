import {ImageBackground} from 'react-native';
import styled from 'styled-components/native';

import {Colors} from '../../shared/lib/theme';
import {Typography} from '../../shared/ui/Typography';
import {rem} from '../../shared/ui/helpers';
import {IconButton} from "../../shared/ui/Button";
import {TextInput} from "react-native-paper";

const {Title2} = Typography;
const HEIGHT = 56;

export const Container = styled.View({
  backgroundColor: Colors.white,
  width: '100%',
  height: '100%',
});

export const ImageBackDrop = styled(ImageBackground)({
  height: '100%',
  width: '100%',
  backgroundColor: Colors.white,
}) as any;

export const Content = styled.View({
  justifyContent: 'center',
  textAlign: 'center',
  padding: rem(16),
});

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
})

export const StyledInput = styled(TextInput)({
  width: '100%',
  justifyContent: 'center',
  backgroundColor: Colors.white,
  height: HEIGHT,
})
