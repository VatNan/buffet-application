/*
 *
 * CreateBill reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  completeLevel: 0,
  loading: false,
  guide: '',
  error: false,
  errorMessage: '',
  customerAmount: 0,
  seatsIsSelect: []
});

function createBillReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default createBillReducer;
