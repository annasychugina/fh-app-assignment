import React from 'react';
import {Path, Svg} from 'react-native-svg';

import {Colors} from '../../lib/theme';

type Props = {
  size?: number;
  color?: string;
};

export const IconClose: React.FC<Props> = ({size, color = Colors.black}) => {
  return (
    <Svg width={size ? size : 24} height={size ? size : 24} viewBox="0 0 24 24">
      <Path
        d="M11.358 0.357736C11.8252 0.824952 11.8252 1.58246 11.358 2.04967L7.69215 5.71554L11.358 9.38141C11.8252 9.84862 11.8252 10.6061 11.358 11.0733C10.8908 11.5406 10.1333 11.5406 9.66607 11.0733L6.00021 7.40748L2.33434 11.0733C1.86713 11.5406 1.10962 11.5406 0.642404 11.0733C0.175188 10.6061 0.175188 9.84862 0.642404 9.38141L4.30827 5.71554L0.642404 2.04967C0.175188 1.58246 0.175188 0.824952 0.642404 0.357736C1.10962 -0.10948 1.86713 -0.10948 2.33434 0.357736L6.00021 4.0236L9.66608 0.357736C10.1333 -0.10948 10.8908 -0.10948 11.358 0.357736Z"
        fill={color}
      />
    </Svg>
  );
};