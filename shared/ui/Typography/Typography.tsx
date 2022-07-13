import type {ComponentType} from 'react';
import type {TextProps, TextStyle} from 'react-native';
import {Text} from 'react-native';
import styled from 'styled-components/native';

import {Colors} from '../../lib/theme';

export interface ColoredTextProps {
  color?: string;
  textAlign?: TextStyle['textAlign'];
  flexShrink?: number;
}

const ColoredText = styled(
  Text as ComponentType<TextProps & ColoredTextProps & {lineHeight?: number}>,
)(({color, textAlign, flexShrink, lineHeight}) => ({
  color: color || Colors.black,
  textAlign: (textAlign || 'left') as never,
  lineHeight,
  flexShrink,
}));

const addPx = (value?: number) =>
  (value ?? null) !== null ? `${value}px` : undefined;
export const createFS = (fontSize: number, lineHeight: number) => ({
  fontSize,
  lineHeight: addPx(lineHeight),
});

const regular = styled(ColoredText)({});

const bold = styled(ColoredText)({
  fontWeight: 'bold',
});

const TitleSemiBold = styled(bold)(createFS(16, 20));
const TitleRegular = styled(regular)(createFS(16, 24));

export const Typography = {
  TitleSemiBold,
  TitleRegular,
};
