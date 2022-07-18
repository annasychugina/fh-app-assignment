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

export type Primary = {primary: true};
export type Floating = {floating: true};
export type Color = Primary | Floating;

type ButtonProps = {
  title: string;
  disabled?: boolean;
  onPress?: () => void;
  isFetching?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  leftIcon?: ReactNode;
} & Color;

export const HEIGHT = 48;
export const BORDER_RADIUS = 6;
export const marginBottom = 16;

export const Button: React.FC<ButtonProps> = props => {
  const buttonStyle = useMemo(() => {
    if (props.disabled) {
      if ('primary' in props)
        return StyleSheet.flatten([styles.primary, styles.disabled]);
    }
    if ('primary' in props) return styles.primary;
    return {};
  }, [props]);

  const textStyle: TextStyle = useMemo(() => {
    if ('white' in props) return styles.white;
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
  leftIconContainer: {
    paddingRight: 3,
  },
  white: {
    color: Colors.white,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
  floating: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: marginBottom,
  },
  black: {
    color: Colors.black,
  },
});
