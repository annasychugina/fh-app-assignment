import {
  createSlice,
  PayloadAction,
  EntityState,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import {RootState} from '../../App';
import {uuidv4} from '../../shared/lib/utils/uuid';

export type ChildrenAgeInfo = {id: string; age: number};

export interface GuestsInfo {
  id: string;
  adultsCount: number;
  childrenCount: number;
  childrenAges?: ChildrenAgeInfo[];
}

export interface GuestsInfoState extends EntityState<GuestsInfo> {}

const adapter = createEntityAdapter<GuestsInfo>();

const initialState = adapter.getInitialState({});

const guestsSlice = createSlice({
  name: 'guests',
  initialState,
  reducers: {
    roomAdded: adapter.addOne,
    roomRemoved: adapter.removeOne,
    roomUpdated: (state, action: PayloadAction<any>) => {
      const room = adapter.getSelectors().selectById(state, action.payload.id);

      if (
        room?.childrenCount === 0 ||
        (room?.childrenCount &&
          action.payload.changes?.childrenCount > room?.childrenCount)
      ) {
        adapter.updateOne(state, {
          id: action.payload.id,
          changes: {
            ...room,
            ...action.payload.changes,
            childrenAges: [
              ...(room?.childrenAges ?? []),
              {id: uuidv4(), age: 0},
            ],
          },
        });
      } else {
        adapter.updateOne(state, {
          id: action.payload.id,
          changes: {
            ...room,
            ...action.payload.changes,
            childrenAges: (room?.childrenAges ?? []).slice(0, -1),
          },
        });
      }
    },
    childrenAgesUpdated: (state, action: PayloadAction<any>) => {
      const room = adapter
        .getSelectors()
        .selectById(state, action.payload.roomId);
      if (!room) return;

      const ages = [...(room?.childrenAges ?? [])];
      const current = ages.findIndex(
        children => children.id === action.payload.id,
      );
      const {id, age} = action.payload;

      if (current === -1) {
      } else {
        ages.splice(current, 1);
        ages.push({id, age});
      }

      adapter.updateOne(state, {
        id: action.payload.roomId,
        changes: {
          childrenAges: ages,
        },
      });
    },
    childrenAgeRemoved: (state, action: PayloadAction<any>) => {
      const room = adapter
        .getSelectors()
        .selectById(state, action.payload.roomId);

      const ages = room?.childrenAges ?? [];

      adapter.updateOne(state, {
        id: action.payload.roomId,
        changes: {
          childrenCount: room?.childrenCount ? room?.childrenCount - 1 : 0,
          childrenAges: ages.filter(age => age.id !== action.payload.id),
        },
      });
    },
  },
  extraReducers: {},
});

export const {reducer: guestsReducer} = guestsSlice;

export const {
  selectById: selectGuestsInfoById,
  selectAll: selectAllGuestsInfos,
  selectEntities: selectAllGuestsInfosEntities,
} = adapter.getSelectors<RootState>(state => state.guests);

export const {
  roomAdded,
  roomRemoved,
  roomUpdated,
  childrenAgesUpdated,
  childrenAgeRemoved,
} = guestsSlice.actions;
