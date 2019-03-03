import { combineReducers } from 'redux';
import items from './items';
import sort from './sort';

export default combineReducers({ items, sort });
