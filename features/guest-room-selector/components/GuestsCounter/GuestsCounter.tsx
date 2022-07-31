import React from 'react';

import {TestProps} from '../../../../shared/lib/utils/TestUtils';
import {Typography} from '../../../../shared/ui/Typography';
import {Counter} from '../Counter';
import {Container, ContentWrapper, StyledView} from './styles';

const {TitleBold} = Typography;
type GuestCounterProps = {
  title: string;
  count: number;
  minCount?: number;
  maxCount?: number;
  onSetCount: (number: number) => void;
  maxValDisabled?: boolean;
} & TestProps;

const MIN_DEFAULT_COUNT = 0;
const MAX_DEFAULT_COUNT = 2;

export const GuestsCounter: React.FC<GuestCounterProps> = ({
  testID,
  count,
  title,
  children,
  minCount = MIN_DEFAULT_COUNT,
  maxCount = MAX_DEFAULT_COUNT,
  maxValDisabled,
  onSetCount,
}) => {
  const handleSetCount = (value: number) => {
    onSetCount(value);
  };
  return (
    <Container>
      <ContentWrapper>
        <TitleBold>{title}</TitleBold>
        <StyledView>
          <Counter
            testID={testID}
            count={count}
            minVal={minCount}
            maxVal={maxCount}
            onSetCount={handleSetCount}
            maxValDisabled={maxValDisabled}
          />
        </StyledView>
      </ContentWrapper>
      {children}
    </Container>
  );
};
