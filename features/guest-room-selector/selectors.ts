import {RootState} from '../../App';
import {selectAllGuestsInfos} from './guestsSlice';

export const selectGuestCount = (state: RootState) => {
  const guestsInfos = selectAllGuestsInfos(state);
  return guestsInfos.reduce(
    (prev, item) => prev + item.childrenCount + item.adultsCount,
    0,
  );
};
