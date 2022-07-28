import React from 'react';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {uuidv4} from '../../shared/lib/utils/uuid';
import {Button} from '../../shared/ui/Button';
import {IconPlus} from '../../shared/ui/icons';
import {SelectRoomItem} from './components/SelectRoomItem/SelectRoomItem';
import {
  GuestsInfo,
  roomAdded,
  roomRemoved,
  selectAllGuestsInfos,
} from './guestsSlice';
import {ButtonWrapper} from './styles';

const strings = {
  title: 'Room 1',
  buttonTitle: 'Add room',
  titleAdults: 'Adults',
  titleChildren: 'Children',
};

const MAX_ROOMS_COUNT = 7;

export const GuestRoomSelector = () => {
  const dispatch = useDispatch();
  const guestsInfos = useSelector(selectAllGuestsInfos);

  const renderSelectRoomItem = (item: GuestsInfo, index: number) => {
    const handleRemoveItem = () => {
      dispatch(roomRemoved(item.id));
    };
    return (
      <SelectRoomItem
        key={item.id}
        index={index}
        item={item}
        onRemove={handleRemoveItem}
      />
    );
  };
  const handleAddRoom = () => {
    if (guestsInfos?.length > MAX_ROOMS_COUNT) {
    } else {
      dispatch(roomAdded({id: uuidv4(), adultsCount: 2, childrenCount: 0}));
    }
  };
  return (
    <>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {guestsInfos?.length > 0 && guestsInfos.map(renderSelectRoomItem)}
        <ButtonWrapper>
          <Button
            secondary
            title={strings.buttonTitle}
            leftIcon={<IconPlus />}
            onPress={handleAddRoom}
          />
        </ButtonWrapper>
      </ScrollView>
    </>
  );
};
