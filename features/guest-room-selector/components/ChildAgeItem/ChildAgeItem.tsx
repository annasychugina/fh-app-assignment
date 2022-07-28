import React from 'react';
import {IconButton} from 'react-native-paper';

import {Colors} from '../../../../shared/lib/theme';
import {Dropdown} from '../../../../shared/ui/DropDown/Dropdown';
import {Typography} from '../../../../shared/ui/Typography';
import {Container, DropDownWrapper} from './styles';

const {TitleBold} = Typography;

type Props = {
  age: number;
  index: number;
  onSelect: (count: number) => void;
  onRemove: () => void;
};

const strings = {
  buttonText: 'Age',
};

const childPossibleAges = Array.from({length: 18}, (_, i) => i + 1);

export const ChildAgeItem: React.FC<Props> = ({
  age,
  index,
  onSelect,
  onRemove,
}) => {
  return (
    <Container>
      <TitleBold>{`Child ${index + 1} age`}</TitleBold>
      <DropDownWrapper>
        <Dropdown
          data={childPossibleAges}
          defaultButtonText={strings.buttonText}
          onSelect={onSelect}
        />
      </DropDownWrapper>

      <IconButton
        icon="close"
        color={Colors.valencia}
        size={24}
        onPress={onRemove}
      />
    </Container>
  );
};
