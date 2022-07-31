import {
  createSlice,
  PayloadAction,
  EntityState,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import {RootState} from '../../../shared/config';
import {uuidv4} from '../../../shared/lib/utils/uuid';
import {
  GuestsInfo,
  ChildrenAgeRemovedPayload,
  ChildrenAgeUpdatedPayload,
} from '../types';

export interface GuestsInfoState extends EntityState<GuestsInfo> {}

const adapter = createEntityAdapter<GuestsInfo>();

export const initialState = adapter.getInitialState();

export const initialRoomItem = {
  id: uuidv4(),
  adultsCount: 2,
  childrenCount: 0,
};

const filledState = adapter.upsertOne(initialState, initialRoomItem);

const guestsSlice = createSlice({
  name: 'guests',
  initialState: filledState,
  reducers: {
    reset: state => {
      // remove all items
      adapter.removeAll(state);
      adapter.upsertOne(state, initialRoomItem);
    },
    roomAdded: adapter.addOne,
    roomRemoved: adapter.removeOne,
    roomUpdated: (state, action: PayloadAction<any>) => {
      const room = adapter.getSelectors().selectById(state, action.payload.id);

      // change adults count
      if (action.payload.changes.adultsCount !== undefined) {
        adapter.updateOne(state, {
          id: action.payload.id,
          changes: {
            ...room,
            ...action.payload.changes,
          },
        });
        return;
      }

      // change children count
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
    childrenAgesUpdated: (
      state,
      action: PayloadAction<ChildrenAgeUpdatedPayload>,
    ) => {
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
    childrenAgeRemoved: (
      state,
      action: PayloadAction<ChildrenAgeRemovedPayload>,
    ) => {
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
  reset,
} = guestsSlice.actions;
