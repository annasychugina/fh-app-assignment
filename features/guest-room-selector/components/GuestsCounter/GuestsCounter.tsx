import React from 'react';

import {Typography} from '../../../../shared/ui/Typography';
import {Counter} from '../Counter/Counter';
import {Container, ContentWrapper, StyledView} from './styles';

const {TitleBold} = Typography;
interface GuestCounterProps {
  title: string;
  count: number;
  minCount?: number;
  maxCount?: number;
  onSetCount: (number: number) => void;
}

const MIN_DEFAULT_COUNT = 0;
const MAX_DEFAULT_COUNT = 2;

export const GuestCounter: React.FC<GuestCounterProps> = ({
  count,
  title,
  children,
  minCount = MIN_DEFAULT_COUNT,
  maxCount = MAX_DEFAULT_COUNT,
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
            count={count}
            minVal={minCount}
            maxVal={maxCount}
            onSetCount={handleSetCount}
          />
        </StyledView>
      </ContentWrapper>
      {children}
    </Container>
  );
};
