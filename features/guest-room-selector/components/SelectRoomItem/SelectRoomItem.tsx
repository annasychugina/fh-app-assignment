import React from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';

import {
  roomUpdated,
  childrenAgesUpdated,
  childrenAgeRemoved,
  ChildrenAgeInfo,
  GuestsInfo,
} from '../../../../entities/guests';
import {Colors} from '../../../../shared/lib/theme';
import {TextButton} from '../../../../shared/ui/TextButton/TextButton';
import {Typography} from '../../../../shared/ui/Typography';
import {
  MIN_ADULTS_COUNT,
  MAX_ADULTS_COUNT,
  MIN_CHILDREN_COUNT,
  MEX_CHILDREN_COUNT,
  MAX_GUESTS_COUNT_PER_ROOM,
} from '../../const';
import {ChildAgeItem} from '../ChildAgeItem';
import {GuestsCounter} from '../GuestsCounter';
import {
  Container,
  StyledDivider,
  TitleWrapper,
  ChildAgeBlock,
  StyledVerticalDivider,
} from './styles';

const {Title1} = Typography;

interface Props {
  item: GuestsInfo;
  index: number;
  onRemove: () => void;
}

export const SelectRoomItem: React.FC<Props> = ({item, index, onRemove}) => {
  const {t} = useTranslation();
  const childrenAges = item?.childrenAges ?? [];
  const room = item;
  const dispatch = useDispatch();
  const maxValDisabled =
    item.adultsCount + item.childrenCount >= MAX_GUESTS_COUNT_PER_ROOM;
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
            text={t('guestsSelector.removeButtonText')}
            color={Colors.valencia}
            onPress={onRemove}
          />
        )}
      </TitleWrapper>

      <GuestsCounter
        count={item.adultsCount}
        title={t('guestsSelector.adults')}
        onSetCount={handleSetAdultsCount}
        minCount={MIN_ADULTS_COUNT}
        maxCount={MAX_ADULTS_COUNT}
        maxValDisabled={maxValDisabled}
      />

      <GuestsCounter
        count={item.childrenCount}
        title={t('guestsSelector.children')}
        minCount={MIN_CHILDREN_COUNT}
        maxCount={MEX_CHILDREN_COUNT}
        onSetCount={handleSetChildrenCount}
        maxValDisabled={maxValDisabled}>
        {childrenAges.length > 0 && (
          <ChildAgeBlock>
            <StyledVerticalDivider />
            {item.childrenAges?.map(renderChildAge)}
          </ChildAgeBlock>
        )}
      </GuestsCounter>
      <StyledDivider />
    </Container>
  );
};
