import {ImageBackground} from 'react-native';
import styled from 'styled-components/native';

import {Colors} from '../../shared/lib/theme';
import {Logo} from '../../shared/ui/Logo';
import {Typography} from '../../shared/ui/Typography';
import {rem} from '../../shared/ui/helpers';

const {Title2} = Typography;

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
  flex: 1,
  padding: rem(16),
});

export const ContentWrapper = styled.View({
  flex: 0.4,
});

export const StyledLogo = styled(Logo)({
  flex: 0.2,
});

export const StyledTitle = styled(Title2)({
  flex: 0.4,
});
