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

export const IconPlus: React.FC<IconProps> = ({
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
        d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"
        fill="#0071F3"
      />
    </Svg>
  );
};
