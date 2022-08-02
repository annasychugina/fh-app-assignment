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
  color: color || Colors.ebonyClay,
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

const regular = styled(ColoredText)({
  fontFamily: 'Inter_400Regular',
});

const semiBold = styled(ColoredText)({
  fontFamily: 'Inter_600SemiBold',
});

const bold = styled(ColoredText)({
  fontFamily: 'Inter_700Bold',
});

const TitleBold = styled(semiBold)(createFS(16, 20));
const TitleRegular = styled(regular)(createFS(16, 24));
const TitleLabel = styled(semiBold)(createFS(16, 24));
const TitleLabel2 = styled(regular)(createFS(16, 24));
const Title1 = styled(semiBold)(createFS(18, 24));
const Title2 = styled(bold)(createFS(21, 29));

export const Typography = {
  TitleBold,
  TitleRegular,
  TitleLabel,
  TitleLabel2,
  Title1,
  Title2,
};
