import React from 'react';
import {IconButton} from 'react-native-paper';

import {Colors} from '../../../../shared/lib/theme';
import {Dropdown} from '../../../../shared/ui/DropDown/Dropdown';
import {Typography} from '../../../../shared/ui/Typography';
import {Container, DropDownWrapper} from './styles';

const {TitleBold} = Typography;

type Props = {
  age: number;
};

const strings = {
  title: 'Child Age',
  buttonText: 'Age',
};

const ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

export const ChildAgeItem: React.FC<Props> = ({age}) => {
  return (
    <Container>
      <TitleBold>{strings.title}</TitleBold>
      <DropDownWrapper>
        <Dropdown data={ages} defaultButtonText={strings.buttonText} />
      </DropDownWrapper>

      <IconButton icon="close" color={Colors.valencia} size={24} />
    </Container>
  );
};
