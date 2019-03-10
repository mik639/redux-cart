import React from 'react';
import reducer from './items';
import {
  SET_CART_ITEMS,
  REMOVE_CART_ITEM,
  INCREASE_COUNT,
  DECREASE_COUNT
} from '../../types/actions';

describe('items reducer', () => {
  let items;
  beforeEach(() => {
    items = [{ id: '1', count: 1 }, { id: '2', count: 2 }];
  });

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle SET_CART_ITEMS action', () => {
    const action = {
      type: SET_CART_ITEMS,
      payload: items
    };
    expect(reducer([], action)).toEqual(items);
  });

  it('should handle REMOVE_CART_ITEM action', () => {
    const action = {
      type: REMOVE_CART_ITEM,
      payload: '1'
    };

    expect(reducer(items, action)).toEqual([
      {
        count: 2,
        id: '2'
      }
    ]);
  });

  it('should handle INCREASE_COUNT action', () => {
    const action = {
      type: INCREASE_COUNT,
      payload: '1'
    };

    expect(reducer([{ id: '1', count: 1 }], action)).toEqual([
      { id: '1', count: 2 }
    ]);
  });

  it('should handle DECREASE_COUNT action', () => {
    const action = {
      type: DECREASE_COUNT,
      payload: '2'
    };

    expect(reducer([{ id: '2', count: 4 }], action)).toEqual([
      { id: '2', count: 3 }
    ]);
  });
});
