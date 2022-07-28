import React, {useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {uuidv4} from '../../shared/lib/utils/uuid';
import {Button} from '../../shared/ui/Button';
import {HEADER_HEIGHT} from '../../shared/ui/Header';
import {IconPlus} from '../../shared/ui/icons';
import {SelectRoomItem} from './components/SelectRoomItem/SelectRoomItem';
import {
  GuestsInfo,
  roomAdded,
  roomRemoved,
  selectAllGuestsInfos,
} from './guestsSlice';
import {ButtonWrapper} from './styles';

const MAX_ROOMS_COUNT = 7;

export const GuestRoomSelector = () => {
  const {t} = useTranslation();
  const scrollView = useRef<ScrollView>(null);
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
  const onContentSizeChange = () => {
    scrollView.current?.scrollToEnd({animated: true});
  };
  const handleAddRoom = () => {
    if (guestsInfos?.length > MAX_ROOMS_COUNT) {
    } else {
      dispatch(roomAdded({id: uuidv4(), adultsCount: 2, childrenCount: 0}));
    }
  };
  return (
    <ScrollView
      ref={scrollView}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={8}
      onContentSizeChange={onContentSizeChange}
      contentContainerStyle={{
        paddingBottom: HEADER_HEIGHT,
      }}>
      {guestsInfos?.length > 0 && guestsInfos.map(renderSelectRoomItem)}
      <ButtonWrapper>
        <Button
          secondary
          title={t('guestsSelector.addButtonTitle')}
          leftIcon={<IconPlus />}
          onPress={handleAddRoom}
        />
      </ButtonWrapper>
    </ScrollView>
  );
};
