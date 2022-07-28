import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';

import {Colors} from '../../../../shared/lib/theme';
import {TextButton} from '../../../../shared/ui/TextButton/TextButton';
import {Typography} from '../../../../shared/ui/Typography';
import {
  ChildrenAgeInfo,
  childrenAgeRemoved,
  childrenAgesUpdated,
  GuestsInfo,
  roomUpdated,
} from '../../guestsSlice';
import {ChildAgeItem} from '../ChildAgeItem/ChildAgeItem';
import {GuestCounter} from '../GuestsCounter/GuestsCounter';
import {Container, StyledDivider, TitleWrapper} from './styles';

const {Title1} = Typography;

interface Props {
  item: GuestsInfo;
  index: number;
  onRemove: () => void;
}

const strings = {
  adults: 'Adults',
  children: 'Children',
  removeButtonText: 'Remove room',
};

export const SelectRoomItem: React.FC<Props> = ({item, index, onRemove}) => {
  const childrenAges = item?.childrenAges ?? [];
  const room = item;
  const dispatch = useDispatch();
  const handleSetAdultsCount = (count: number) => {
    dispatch(roomUpdated({id: item.id, changes: {adultsCount: count}}));
  };
  const handleSetChildrenCount = (count: number) => {
    dispatch(
      roomUpdated({
        id: item.id,
        changes: {childrenCount: count},
      }),
    );
  };

  const renderChildAge = (item: ChildrenAgeInfo, index: number) => {
    const handleSelectChildAge = (value: number) => {
      dispatch(
        childrenAgesUpdated({
          id: item.id,
          roomId: room.id,
          age: value,
        }),
      );
    };

    const handleRemoveAge = () => {
      dispatch(
        childrenAgeRemoved({
          id: item.id,
          roomId: room.id,
        }),
      );
    };
    return (
      <ChildAgeItem
        key={item.id}
        age={item.age}
        index={index}
        onSelect={handleSelectChildAge}
        onRemove={handleRemoveAge}
      />
    );
  };

  return (
    <Container>
      <TitleWrapper>
        <Title1>Room {index + 1}</Title1>
        {index !== 0 && (
          <TextButton
            text={strings.removeButtonText}
            color={Colors.valencia}
            onPress={onRemove}
          />
        )}
      </TitleWrapper>

      <GuestCounter
        count={item.adultsCount}
        title={strings.adults}
        onSetCount={handleSetAdultsCount}
      />
      <GuestCounter
        count={item.childrenCount}
        title={strings.children}
        onSetCount={handleSetChildrenCount}>
        {childrenAges.length > 0 && (
          <View>{item.childrenAges?.map(renderChildAge)}</View>
        )}
      </GuestCounter>
      <StyledDivider />
    </Container>
  );
};
