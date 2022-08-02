import React, {PropsWithChildren} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';

import {Colors} from '../../lib/theme';
import {Typography} from '../Typography';
import {StyledHeaderBackButton} from './components';
import {HEADER_HEIGHT} from './const';
import {StyledContentView, Container, StyledBlock} from './styles';

const {TitleBold} = Typography;

export type HeaderProps = {
  style?: StyleProp<ViewStyle>;
  title?: string;
  showBackButton?: boolean;
  color?: string;
  backIcon?: React.ReactNode;
  onBackPress?: () => void;
};

export const Header = ({
  style,
  onBackPress,
  backIcon,
  title,
  children,
  showBackButton = true,
  color = Colors.black,
}: PropsWithChildren<HeaderProps>) => (
  <Container style={style} height={HEADER_HEIGHT} paddingTop={6}>
    {showBackButton ? (
      <StyledHeaderBackButton onPress={onBackPress} icon={backIcon} />
    ) : (
      <StyledBlock />
    )}
    {!!title && (
      <StyledContentView>
        <TitleBold numberOfLines={1} flexShrink={1} color={color}>
          {title}
        </TitleBold>
      </StyledContentView>
    )}
    {children}
  </Container>
);
