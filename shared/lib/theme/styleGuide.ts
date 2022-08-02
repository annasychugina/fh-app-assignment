export enum EShadow {
  S = 'Small',
}

type Shadow = {
  elevation: string;
  shadowColor: string;
};

export const ShadowsSizes: Record<EShadow, number> = {
  [EShadow.S]: 2,
};
export const ShadowOpacities: Record<EShadow, number> = {
  [EShadow.S]: 0.5,
};

export const makeShadow = (
  shadow?: EShadow,
  color: string = 'rgba(68, 80, 95, 1)',
): Shadow | object =>
  shadow
    ? {
        elevation: `${ShadowsSizes[shadow]}`,
        shadowColor: color,
        shadowOpacity: `${ShadowOpacities[shadow]}`,
      }
    : {};
