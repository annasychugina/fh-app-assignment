import React, {PropsWithChildren} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';
import {StyleSheet} from 'react-native';
import DropShadow from 'react-native-drop-shadow';

import {Colors} from '../../lib/theme';
import {Typography} from '../Typography';
import {StyledHeaderBackButton} from './components';
import {HEADER_HEIGHT} from './const';
import {StyledContentView, Container, StyledBlock} from './styles';

const {TitleSemiBold} = Typography;

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
  <DropShadow style={styles.shadow}>
    <Container style={style} height={HEADER_HEIGHT} paddingTop={6}>
      {showBackButton ? (
        <StyledHeaderBackButton onPress={onBackPress} icon={backIcon} />
      ) : (
        <StyledBlock />
      )}
      <StyledContentView>
        <TitleSemiBold numberOfLines={1} flexShrink={1} color={color}>
          {title}
        </TitleSemiBold>
      </StyledContentView>
      {children}
    </Container>
  </DropShadow>
);

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#44505F',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});
