import React from 'react';
import {ScrollView} from 'react-native';

import {Button} from '../../shared/ui/Button';
import {IconPlus} from '../../shared/ui/icons';
import {SelectRoomItem} from './components/SelectRoomItem/SelectRoomItem';
import {ButtonWrapper} from './styles';

const strings = {
  title: 'Room 1',
  buttonTitle: 'Add room',
  titleAdults: 'Adults',
  titleChildren: 'Children',
};

const map = [{id: '1'}, {id: '2'}];

export const GuestRoomSelector = () => {
  const renderSelectRoomItem = (item, index: number) => {
    return (
      <SelectRoomItem key={item.id} id={item.id} index={index} item={item} />
    );
  };
  return (
    <>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {map?.map(renderSelectRoomItem)}
        <ButtonWrapper>
          <Button
            secondary
            title={strings.buttonTitle}
            leftIcon={<IconPlus />}
          />
        </ButtonWrapper>
      </ScrollView>
    </>
  );
};
