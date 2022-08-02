import React, {useRef} from 'react';
import {Trans, useTranslation} from 'react-i18next';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {
  selectAllGuestsInfos,
  selectGuestCount,
  roomRemoved,
  roomAdded,
  GuestsInfo,
} from '../../entities/guests';
import {usePrevious} from '../../shared/lib/hooks';
import {Colors} from '../../shared/lib/theme';
import {uuidv4} from '../../shared/lib/utils/uuid';
import {Button} from '../../shared/ui/Button';
import {HEADER_HEIGHT} from '../../shared/ui/Header';
import {Typography} from '../../shared/ui/Typography';
import {IconPlus, IconSearch} from '../../shared/ui/icons';
import {SelectRoomItem} from './components/SelectRoomItem';
import {MAX_ROOMS_COUNT} from './const';
import {ButtonWrapper, SelectorWrapper} from './styles';

const {TitleLabel2, TitleLabel} = Typography;

type Props = {
  onSearch: () => void;
};

export const GuestRoomSelector = ({onSearch}: Props) => {
  const {t} = useTranslation();
  const guestCount = useSelector(selectGuestCount);
  const scrollView = useRef<ScrollView>(null);
  const dispatch = useDispatch();
  const guestsInfos = useSelector(selectAllGuestsInfos);
  const isMaxRoomsCount = guestsInfos?.length > MAX_ROOMS_COUNT;
  const prevRoomsCount = usePrevious<number>(guestsInfos?.length ?? 0);

  const renderSelectRoomItem = (item: GuestsInfo, index: number) => {
    const handleRemoveItem = () => {
      dispatch(roomRemoved(item.id));
    };
    return (
      <SelectRoomItem
        testID={`room.${item.id}`}
        key={item.id}
        index={index}
        item={item}
        onRemove={handleRemoveItem}
      />
    );
  };
  const onContentSizeChange = () => {
    // scroll to end only of add a new room
    if (prevRoomsCount && prevRoomsCount < guestsInfos?.length) {
      scrollView.current?.scrollToEnd({animated: true});
    }
  };
  const handleAddRoom = () => {
    if (isMaxRoomsCount) {
      return;
    }
    dispatch(roomAdded({id: uuidv4(), adultsCount: 2, childrenCount: 0}));
  };
  return (
    <>
      <SelectorWrapper>
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
              testID="addRoom"
              secondary
              title={t('guestsSelector.addButtonTitle')}
              leftIcon={<IconPlus />}
              onPress={handleAddRoom}
              disabled={isMaxRoomsCount}
            />
          </ButtonWrapper>
        </ScrollView>
      </SelectorWrapper>
      <Button
        testID="buttonSearch"
        primary
        floating
        onPress={onSearch}
        leftIcon={<IconSearch />}
        title={
          <Trans
            i18nKey="buttonSearch"
            values={{roomsCount: guestsInfos?.length, guestCount}}
            components={[
              <TitleLabel color={Colors.white} />,
              <TitleLabel2 color={Colors.white} />,
              <TitleLabel color={Colors.white} />,
              <TitleLabel2 color={Colors.white} />,
            ]}
          />
        }
      />
    </>
  );
};
