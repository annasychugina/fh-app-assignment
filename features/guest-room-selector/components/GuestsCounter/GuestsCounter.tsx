import React from 'react';

import {Typography} from '../../../../shared/ui/Typography';
import {Counter} from '../Counter/Counter';
import {Container, ContentWrapper, StyledView} from './styles';

const {TitleBold} = Typography;
interface GuestCounterProps {
  title: string;
  count?: number;
  onSetCount: (number: number) => void;
}

export const GuestCounter: React.FC<GuestCounterProps> = ({
  count = 1,
  title,
  children,
  onSetCount,
}) => {
  const handleSetCount = (value) => {
    onSetCount(value);
  };
  return (
    <Container>
      <ContentWrapper>
        <TitleBold>{title}</TitleBold>
        <StyledView>
          <Counter
            count={2}
            onSetCount={handleSetCount}
            minVal={0}
            maxVal={2}
          />
        </StyledView>
      </ContentWrapper>
      {children}
    </Container>
  );
};
