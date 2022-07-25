import React from 'react';

import {Colors} from '../../../../shared/lib/theme';
import {Typography} from '../../../../shared/ui/Typography';
import {Container, ContentWrapper, StyledIconButton} from './styles';

const {TitleBold} = Typography;

interface Props {
  count?: number;
  minVal?: number;
  maxVal?: number;
  onSetCount: (number: number) => any;
}

export const Counter: React.FC<Props> = ({
  count = 1,
  minVal = 1,
  maxVal = 2,
  onSetCount,
}) => {
  const IncrementButton = () => {
    const onPress = () => {
      if (!maxVal || count < maxVal) {
        onSetCount(count + 1);
      }
    };
    return (
      <StyledIconButton
        icon="plus"
        onPress={onPress}
        color={count === Number(maxVal) ? Colors.paleSky : Colors.blueRibbon}
      />
    );
  };

  const DecrementButton = () => {
    const onPress = () => {
      if (count > minVal) {
        onSetCount(count - 1);
      }
    };
    return (
      <StyledIconButton
        icon="minus"
        onPress={onPress}
        color={count === Number(minVal) ? Colors.paleSky : Colors.blueRibbon}
      />
    );
  };

  return (
    <Container>
      <DecrementButton />
      <ContentWrapper>
        <TitleBold numberOfLines={1} flexShrink={1} color={Colors.ebonyClay}>
          {count}
        </TitleBold>
      </ContentWrapper>
      <IncrementButton />
    </Container>
  );
};
