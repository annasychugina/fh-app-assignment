import {useSelector} from 'react-redux';

import {ChildrenAgeInfo, selectAllGuestsInfos} from '../guestsSlice';

type ErrorsChildrenAge = {roomId: string; error: string}[];

type ValidationErrors = {
  childrenAgesErrors: ErrorsChildrenAge;
};

const validateChildrenAges = (
  roomId: string,
  roomNumber: number,
  errors: ErrorsChildrenAge,
  childrenAges?: ChildrenAgeInfo[],
) => {
  const isValid = childrenAges?.every(
    child => child.age !== 0 && child.age !== undefined,
  );
  if (!isValid) {
    errors.push({roomId, error: 'Children age is required!'});
  }

  return errors;
};

export const useValidateGuestsInfo = () => {
  const errors: ValidationErrors = {
    childrenAgesErrors: [],
  };
  const guestsInfos = useSelector(selectAllGuestsInfos);

  guestsInfos.forEach((item, index) => {
    if (item.childrenCount) {
      validateChildrenAges(
        item.id,
        index,
        errors.childrenAgesErrors,
        item.childrenAges,
      );
    }
  });

  return errors;
};
