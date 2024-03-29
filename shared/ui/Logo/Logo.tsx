import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
};

const DEFAULT_WIDTH = 120;
const DEFAULT_HEIGHT = 32;

export const Logo = ({
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  ...restProps
}: Props) => {
  return (
    <Svg width={width} height={height} fill="none" {...restProps}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M82.526 16.25c0-4.784-3.422-8.211-8.123-8.211-4.68 0-8.1 3.427-8.1 8.21 0 4.784 3.42 8.21 8.1 8.21 4.701 0 8.123-3.426 8.123-8.21Zm-8.123 5.211c-2.864 0-4.703-2.26-4.703-5.212 0-2.975 1.84-5.212 4.703-5.212 2.862 0 4.725 2.237 4.725 5.212 0 2.951-1.862 5.212-4.725 5.212Zm44.584-.311v2.975h-9.869V8.25h3.305V21.15h6.564Zm-48.84 2.88c-.777-.408-1.31-.97-1.31-.97l-2.141 3.27 2.717 1.699 2.136-3.419s-.624-.172-1.402-.58Zm36.863.095V21.15h-7.681v-3.594h7.518v-2.975h-7.518v-3.355h7.681V8.25H96.024v15.874h10.986Zm-17.252-12.9v12.9h-3.329v-12.9H81.89V8.252h12.384v2.975h-4.516Zm-25.91-2.974v15.874H60.52V17.46h-7.332v6.664h-3.306V8.25h3.306v6.235h7.332V8.251h3.329Z"
        fill="#07F"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.305 17.556v6.569H0V8.25h10.987v2.975H3.305v3.355h7.519v2.975H3.305Zm12.263 6.569V8.25h-3.305v15.874h3.305ZM31.355 8.25v15.874h-3.189l-7.402-10.353v10.353H17.46V8.25h3.398l7.193 9.972V8.25h3.305Zm16.47 7.949c0 4.783-3.376 7.925-8.24 7.925h-6.122V8.25h6.122c4.864 0 8.24 3.165 8.24 7.949Zm-11.057 4.95h2.817c3.072 0 4.864-2.261 4.864-4.95 0-2.809-1.675-4.974-4.864-4.974h-2.817v9.924Z"
        fill="#2A333D"
      />
    </Svg>
  );
};
