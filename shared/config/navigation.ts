export enum EScreens {
  HOME_SCREEN = 'HomeScreen',
  GUEST_AND_ROOM_SELECTOR_SCREEN = 'GuestAndRoomSelector',
}

export type RootStackParamList = {
  [EScreens.HOME_SCREEN]: undefined;
  [EScreens.GUEST_AND_ROOM_SELECTOR_SCREEN]: undefined;
};
