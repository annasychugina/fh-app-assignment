import {createSlice} from '@reduxjs/toolkit';

type ChildrenAgesInfo = {[key: string]: number};

export interface GuestsInfo {
  adultsCount: number;
  childrenCount: number;
  childrenAges: ChildrenAgesInfo;
}

const initialState: GuestsInfo = {
  adultsCount: 2,
  childrenCount: 0,
  childrenAges: {},
};

const guestsSlice = createSlice({
  name: 'guests',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {reducer: guestsReducer} = guestsSlice;
