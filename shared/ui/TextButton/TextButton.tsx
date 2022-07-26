import React from 'react';
import {Pressable, PressableProps} from 'react-native';

import {Colors} from '../../lib/theme';
import {Typography} from '../Typography';
import {StyledView} from './styles';

const {TitleLabel} = Typography;

export type Props = {
  text?: string | React.ReactNode;
  color: string;
} & PressableProps;

export const TextButton: React.FC<Props> = ({
  text,
  children,
  color = Colors.ebonyClay,
  ...props
}) => (
  <Pressable {...props}>
    <StyledView>
      <TitleLabel color={color}>{text}</TitleLabel>
      {children}
    </StyledView>
  </Pressable>
);
