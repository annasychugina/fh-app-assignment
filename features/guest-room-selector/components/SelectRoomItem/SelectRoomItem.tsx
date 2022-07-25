import React from 'react';
import {View} from 'react-native';
import {Divider} from 'react-native-paper';

import {Typography} from '../../../../shared/ui/Typography';
import {ChildAgeItem} from '../ChildAgeItem/ChildAgeItem';
import {GuestCounter} from '../GuestsCounter/GuestsCounter';
import {Container} from './styles';

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
};

export const SelectRoomItem: React.FC<Props> = ({item, id, index}) => {
  return (
    <Container>
      <Title1>Room {index + 1}</Title1>
      <GuestCounter count={3} title={strings.adults} />
      <GuestCounter count={3} title={strings.children}>
        <View>
          {ages?.length > 0 &&
            ages?.map((child, index) => (
              <ChildAgeItem key={child?.id} age={child?.age} />
            ))}
        </View>
      </GuestCounter>
      <Divider />
    </Container>
  );
};
