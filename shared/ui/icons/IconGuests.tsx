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

export const IconGuests = ({
  width = 16,
  height = 16,
  color = defaultColor,
  ...props
}: IconProps) => {
  const remWidth = rem(width);
  const remHeight = rem(height);
  return (
    <Svg
      width={remWidth}
      height={remHeight}
      fill="none"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.875 7.5c1.035 0 1.867-.88 1.867-1.964 0-1.085-.832-1.965-1.867-1.965-1.035 0-1.875.88-1.875 1.965 0 1.084.84 1.964 1.875 1.964ZM6.25 6.714c1.245 0 2.242-1.053 2.242-2.357C8.492 3.053 7.495 2 6.25 2S4 3.053 4 4.357c0 1.304 1.005 2.357 2.25 2.357Zm5.625 2.357c-1.373 0-4.125.723-4.125 2.161V13H16v-1.768c0-1.438-2.752-2.16-4.125-2.16ZM6.25 8.286c-1.747 0-5.25.919-5.25 2.75V13h5.25v-1.768c0-.668.247-1.838 1.777-2.726-.652-.142-1.282-.22-1.777-.22Z"
        fill={color}
      />
    </Svg>
  );
};
