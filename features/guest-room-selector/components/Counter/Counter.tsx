import React from 'react';

import {Colors} from '../../../../shared/lib/theme';
import {IconButton} from '../../../../shared/ui/Button';
import {Typography} from '../../../../shared/ui/Typography';
import {Container, ContentWrapper} from './styles';

const {TitleBold} = Typography;

interface Props {
  count?: number;
  minVal?: number;
  maxVal?: number;
  onSetCount: (number: number) => void;
  maxValDisabled?: boolean;
}

export const Counter: React.FC<Props> = ({
  count = 1,
  minVal = 1,
  maxVal = 2,
  onSetCount,
  maxValDisabled,
}) => {
  const IncrementButton = () => {
    const onPress = () => {
      if (!maxValDisabled && (!maxVal || count < maxVal)) {
        onSetCount(count + 1);
      }
    };
    return (
      <IconButton
        icon="plus"
        onPress={onPress}
        color={
          count === Number(maxVal) || maxValDisabled
            ? Colors.paleSky
            : Colors.blueRibbon
        }
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
      <IconButton
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
