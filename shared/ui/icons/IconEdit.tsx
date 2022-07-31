import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

import {Colors} from '../../lib/theme';
import {rem} from '../helpers';

const defaultColor = Colors.white;

export type IconProps = {
  color?: string;
  height?: number;
  width?: number;
} & SvgProps;

export const IconEdit = ({
  width = 16,
  height = 16,
  color = defaultColor,
  ...props
}: IconProps) => {
  const remWidth = rem(width);
  const remHeight = rem(height);
  return (
    <Svg width={remWidth} height={remHeight} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m9.947 2.676 3.255 3.266-8.238 8.268-3.252-3.266 8.235-8.268Zm5.724-.788L14.22.43a1.436 1.436 0 0 0-2.035 0l-1.39 1.395 3.254 3.267 1.622-1.628a1.117 1.117 0 0 0 0-1.577ZM.009 15.535a.371.371 0 0 0 .448.442l3.626-.882-3.252-3.267-.822 3.707Z"
        fill="#0071F3"
      />
    </Svg>
  );
};
