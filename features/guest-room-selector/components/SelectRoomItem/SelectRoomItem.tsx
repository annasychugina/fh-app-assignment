import React from 'react';
import {View} from 'react-native';

import {Colors} from '../../../../shared/lib/theme';
import {TextButton} from '../../../../shared/ui/TextButton/TextButton';
import {Typography} from '../../../../shared/ui/Typography';
import {ChildAgeItem} from '../ChildAgeItem/ChildAgeItem';
import {GuestCounter} from '../GuestsCounter/GuestsCounter';
import {Container, StyledDivider, TitleWrapper} from './styles';

const {Title1} = Typography;

interface Props {
  item?: any;
  id: string;
  index: number;
}

const ages = [{id: 1, age: 23}];
const strings = {
  adults: 'Adults',
  children: 'Children',
  removeButtonText: 'Remove room',
};

export const SelectRoomItem: React.FC<Props> = ({item, id, index}) => {
  const renderAge = item => {
    return <ChildAgeItem key={item.id} age={item?.age} />;
  };
  return (
    <Container>
      <TitleWrapper>
        <Title1>Room {index + 1}</Title1>
        <TextButton text={strings.removeButtonText} color={Colors.valencia} />
      </TitleWrapper>

      <GuestCounter count={3} title={strings.adults} onSetCount={() => {}} />
      <GuestCounter count={3} title={strings.children} onSetCount={() => {}}>
        <View>{ages?.length > 0 && ages?.map(renderAge)}</View>
      </GuestCounter>
      <StyledDivider />
    </Container>
  );
};
