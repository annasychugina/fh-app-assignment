import React from 'react';
import {IconButton} from 'react-native-paper';

import {Typography} from '../../../../shared/ui/Typography';
import {Container} from './styles';

const {TitleBold} = Typography;

type Props = {
  age: number;
};

const strings = {
  title: 'Child Age',
};

export const ChildAgeItem: React.FC<Props> = ({age}) => {
  return (
    <Container>
      <TitleBold>{strings.title}</TitleBold>
      <IconButton icon="close" color="red" />
    </Container>
  );
};
