import React from 'react';

import {Typography} from '../../../../shared/ui/Typography';
import {Counter} from '../Counter/Counter';
import {Container, ContentWrapper, StyledView} from './styles';

const {TitleBold} = Typography;
interface GuestCounterProps {
  title: string;
  count?: number;
  setCount: (number: number) => void;
}

export const GuestCounter: React.FC<GuestCounterProps> = ({
  count = 1,
  title,
  setCount = () => {},
  children,
}) => {
  return (
    <Container>
      <ContentWrapper>
        <TitleBold>{title}</TitleBold>
        <StyledView>
          <Counter
            count={2}
            onSetCount={value => {
              setCount(value);
            }}
            minVal={0}
            maxVal={2}
          />
        </StyledView>
      </ContentWrapper>
      {children}
    </Container>
  );
};
