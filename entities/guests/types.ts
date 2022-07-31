import {EntityId} from '@reduxjs/toolkit';

export type ChildrenAgeInfo = {id: string; age: number};

export interface GuestsInfo {
  id: string;
  adultsCount: number;
  childrenCount: number;
  childrenAges?: ChildrenAgeInfo[];
}

export type ChildrenAgeUpdatedPayload = {
  id: string;
  roomId: EntityId;
  age: number;
};

export type ChildrenAgeRemovedPayload = {
  id: string;
  roomId: EntityId;
};
