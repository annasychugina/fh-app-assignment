import React from 'react';

import {Colors} from '../../../../shared/lib/theme';
import {TestProps} from '../../../../shared/lib/utils/TestUtils';
import {IconButton} from '../../../../shared/ui/Button';
import {Typography} from '../../../../shared/ui/Typography';
import {Container, ContentWrapper} from './styles';

const {TitleBold} = Typography;

type Props = {
  count?: number;
  minVal?: number;
  maxVal?: number;
  onSetCount: (number: number) => void;
  maxValDisabled?: boolean;
} & TestProps;

const DEFAULT_MIN_COUNT = 1;
const DEFAULT_MAX_COUNT = 2;
const DEFAULT_COUNT = 1;

export const Counter: React.FC<Props> = ({
  testID,
  count = DEFAULT_COUNT,
  minVal = DEFAULT_MIN_COUNT,
  maxVal = DEFAULT_MAX_COUNT,
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
    <Container testID={testID}>
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
