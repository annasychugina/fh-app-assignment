import React, {ReactNode, useMemo} from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  Text,
} from 'react-native';

import {Colors} from '../../lib/theme';
import {TestProps} from '../../lib/utils/TestUtils';
import {rem} from '../helpers';

export type Primary = {primary: true};
export type Floating = {floating: true};
export type Secondary = {secondary: true};
export type Color = Primary | Floating | Secondary;

type ButtonProps = {
  title: string | ReactNode;
  disabled?: boolean;
  onPress?: () => void;
  isFetching?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  leftIcon?: ReactNode;
} & Color &
  TestProps;

export const HEIGHT = 48;
export const BORDER_RADIUS = 6;
export const marginBottom = 16;

export const Button: React.FC<ButtonProps> = props => {
  const buttonStyle = useMemo(() => {
    if (props.disabled) {
      if ('primary' in props)
        return StyleSheet.flatten([styles.primary, styles.disabled]);

      if ('secondary' in props)
        return StyleSheet.flatten([styles.secondary, styles.disabled]);
    }
    if ('primary' in props) return styles.primary;
    if ('secondary' in props) return styles.secondary;
    return {};
  }, [props]);

  const textStyle: TextStyle = useMemo(() => {
    if ('primary' in props) return styles.white;
    if ('secondary' in props) return styles.blueRibbon;
    return styles.white;
  }, [props]);

  const content =
    props.isFetching || props.loading ? (
      <View />
    ) : (
      <View style={[styles.content]}>
        {props.leftIcon && (
          <View style={styles.leftIconContainer}>{props.leftIcon}</View>
        )}
        <Text style={textStyle} numberOfLines={1}>
          {props.title}
        </Text>
      </View>
    );

  const buttonContainerStyle = useMemo(() => {
    if ('floating' in props) {
      return styles.floating;
    }
    return {};
  }, [props]);

  return (
    <Pressable
      testID={props.testID}
      disabled={props.disabled || props.isFetching || props.loading}
      style={[styles.container, buttonStyle, buttonContainerStyle]}
      onPress={props.onPress}>
      {content}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
    borderRadius: BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  containerOutlined: {},
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  disabled: {
    opacity: 0.6,
  },
  primary: {
    backgroundColor: Colors.blueRibbon,
  },
  secondary: {
    backgroundColor: Colors.aliceBlue,
    borderWidth: 1,

    borderColor: Colors.tropicalBlue,
    color: Colors.blueRibbon,
    fontSize: rem(16),
    lineHeight: 24,
  },
  leftIconContainer: {
    paddingRight: rem(3),
  },
  white: {
    color: Colors.white,
    fontSize: rem(16),
    lineHeight: 24,
    fontWeight: '600',
  },
  blueRibbon: {
    color: Colors.blueRibbon,
    fontSize: rem(16),
    lineHeight: 24,
    fontWeight: '600',
  },
  floating: {
    position: 'absolute',
    left: rem(16),
    right: rem(16),
    bottom: marginBottom,
  },
  black: {
    color: Colors.ebonyClay,
  },
});
