import {uuidv4} from '../../../shared/lib/utils/uuid';
import {store} from '../../../shared/store';
import {
  UUID,
  selectAllGuestsInfos,
  roomUpdated,
  roomRemoved,
  roomAdded,
  reset,
  childrenAgesUpdated,
  childrenAgeRemoved,
} from '../model';

describe('guests slice', () => {
  afterEach(() => {
    jest.clearAllMocks();
    store.dispatch(reset());
  });

  test('Updates children count', () => {
    const state = store.getState();
    let guestsState = selectAllGuestsInfos(state);

    const unchangedGuestsInfo = guestsState.find(guest => guest.id === UUID);

    expect(unchangedGuestsInfo?.adultsCount).toBe(2);
    expect(unchangedGuestsInfo?.childrenCount).toBe(0);

    store.dispatch(roomUpdated({id: UUID, changes: {childrenCount: 1}}));

    guestsState = selectAllGuestsInfos(store.getState());

    const changeGuestInfo = guestsState.find(guest => guest.id === UUID);
    expect(changeGuestInfo?.adultsCount).toBe(2);
    expect(changeGuestInfo?.childrenCount).toBe(1);

    store.dispatch(roomUpdated({id: UUID, changes: {childrenCount: 0}}));
    guestsState = selectAllGuestsInfos(store.getState());
    const backToUnchangedGuestsInfo = guestsState.find(
      guest => guest.id === UUID,
    );
    expect(backToUnchangedGuestsInfo).toEqual(unchangedGuestsInfo);
  });

  test('Updates adults count', () => {
    const state = store.getState();
    let guestsState = selectAllGuestsInfos(state);

    const unchangedGuestsInfo = guestsState.find(guest => guest.id === UUID);

    expect(unchangedGuestsInfo?.adultsCount).toBe(2);
    expect(unchangedGuestsInfo?.childrenCount).toBe(0);

    store.dispatch(roomUpdated({id: UUID, changes: {adultsCount: 1}}));

    guestsState = selectAllGuestsInfos(store.getState());

    const changeGuestInfo = guestsState.find(guest => guest.id === UUID);
    expect(changeGuestInfo?.adultsCount).toBe(1);
    expect(changeGuestInfo?.childrenCount).toBe(0);

    store.dispatch(roomUpdated({id: UUID, changes: {adultsCount: 2}}));
    guestsState = selectAllGuestsInfos(store.getState());
    const backToUnchangedGuestsInfo = guestsState.find(
      guest => guest.id === UUID,
    );
    expect(backToUnchangedGuestsInfo).toEqual(unchangedGuestsInfo);
  });

  test('Add/Remove children age item if increase/decrease children count', () => {
    const state = store.getState();
    let guestsState = selectAllGuestsInfos(state);

    const unchangedGuestsInfo = guestsState.find(guest => guest.id === UUID);

    expect(unchangedGuestsInfo?.childrenAges).toStrictEqual([]);
    store.dispatch(roomUpdated({id: UUID, changes: {childrenCount: 1}}));

    guestsState = selectAllGuestsInfos(store.getState());

    const changeGuestInfo = guestsState.find(guest => guest.id === UUID);
    expect(changeGuestInfo?.childrenAges?.length).toBe(1);

    store.dispatch(roomUpdated({id: UUID, changes: {childrenCount: 0}}));
    guestsState = selectAllGuestsInfos(store.getState());

    const changeGuestInfo2 = guestsState.find(guest => guest.id === UUID);
    expect(changeGuestInfo2?.childrenAges?.length).toBe(0);
  });

  test('Deletes a room from list with id', () => {
    const state = store.getState();
    let guestsState = selectAllGuestsInfos(state);

    const initialRoomsCount = guestsState.length;

    expect(initialRoomsCount).toBe(1);

    store.dispatch(roomRemoved(UUID));

    guestsState = selectAllGuestsInfos(store.getState());
    expect(guestsState.length).toBe(0);

    store.dispatch(reset());
  });

  test('Adds a new room item', () => {
    const state = store.getState();
    let guestsState = selectAllGuestsInfos(state);
    const initialRoomsCount = guestsState.length;

    expect(initialRoomsCount).toBe(1);

    const addedUUID = uuidv4();

    store.dispatch(
      roomAdded({id: addedUUID, adultsCount: 3, childrenCount: 0}),
    );

    guestsState = selectAllGuestsInfos(store.getState());

    expect(guestsState.length).toBe(2);

    const changeGuestInfo = guestsState.find(guest => guest.id === addedUUID);

    expect(changeGuestInfo?.adultsCount).toBe(3);
    expect(changeGuestInfo?.childrenCount).toBe(0);
    expect(changeGuestInfo?.id).toBe(addedUUID);
  });

  test('Updates children ages', () => {
    const state = store.getState();
    let guestsState = selectAllGuestsInfos(state);

    const unchangedGuestsInfo = guestsState.find(guest => guest.id === UUID);

    expect(unchangedGuestsInfo?.childrenAges).toStrictEqual([]);
    store.dispatch(roomUpdated({id: UUID, changes: {childrenCount: 1}}));

    guestsState = selectAllGuestsInfos(store.getState());

    const changeGuestInfo = guestsState.find(guest => guest.id === UUID);
    expect(changeGuestInfo?.childrenAges?.length).toBe(1);

    const currId = changeGuestInfo?.childrenAges?.[0].id;

    expect(currId).toBeDefined();
    expect(currId).not.toBe('');

    store.dispatch(
      childrenAgesUpdated({
        id: currId ?? '',
        roomId: UUID,
        age: 2,
      }),
    );

    guestsState = selectAllGuestsInfos(store.getState());
    const updated = guestsState.find(guest => guest.id === UUID);
    const updatedAge = (updated?.childrenAges ?? []).find(
      item => item.id === currId,
    );

    expect(updatedAge).toEqual({
      id: currId ?? '',
      age: 2,
    });
  });

  test('Remove children ages and set counter', () => {
    const state = store.getState();
    let guestsState = selectAllGuestsInfos(state);

    const unchangedGuestsInfo = guestsState.find(guest => guest.id === UUID);

    expect(unchangedGuestsInfo?.childrenAges).toStrictEqual([]);
    store.dispatch(roomUpdated({id: UUID, changes: {childrenCount: 1}}));

    guestsState = selectAllGuestsInfos(store.getState());

    const changeGuestInfo = guestsState.find(guest => guest.id === UUID);
    expect(changeGuestInfo?.childrenAges?.length).toBe(1);

    const currId = changeGuestInfo?.childrenAges?.[0].id;
    expect(currId).toBeDefined();
    expect(currId).not.toBe('');

    store.dispatch(
      childrenAgeRemoved({
        id: currId ?? '',
        roomId: UUID,
      }),
    );

    guestsState = selectAllGuestsInfos(store.getState());
    const updated = guestsState.find(guest => guest.id === UUID);

    expect(updated?.childrenAges?.length).toBe(0);
    expect(updated?.childrenCount).toBe(0);
  });
});
