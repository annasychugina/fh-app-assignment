import React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';

import {Colors} from '../../lib/theme';
import {rem} from '../helpers';

const defaultColor = Colors.white;

export type IconProps = {
  color?: string;
  height?: number;
  width?: number;
  gradientColors?: (string | number)[];
} & SvgProps;

export const IconClose: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = defaultColor,
  ...props
}) => {
  const remWidth = rem(width);
  const remHeight = rem(height);
  return (
    <Svg width={remWidth} height={remHeight} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"
        fill={color}
      />
    </Svg>
  );
};
