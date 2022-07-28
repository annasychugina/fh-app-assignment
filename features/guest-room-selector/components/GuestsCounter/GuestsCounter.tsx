import React from 'react';

import {Typography} from '../../../../shared/ui/Typography';
import {Counter} from '../Counter/Counter';
import {Container, ContentWrapper, StyledView} from './styles';

const {TitleBold} = Typography;
interface GuestCounterProps {
  title: string;
  count: number;
  onSetCount: (number: number) => void;
}

const MIN_COUNT = 0;
const MAX_COUNT = 2;

export const GuestCounter: React.FC<GuestCounterProps> = ({
  count,
  title,
  children,
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
            minVal={MIN_COUNT}
            maxVal={MAX_COUNT}
            onSetCount={handleSetCount}
          />
        </StyledView>
      </ContentWrapper>
      {children}
    </Container>
  );
};
