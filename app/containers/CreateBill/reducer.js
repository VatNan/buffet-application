/*
 *
 * CreateBill reducer
 *
 */

import { fromJS, List } from 'immutable';
import {
  DEFAULT_ACTION,
  CHECK_CUSTOMER_AMOUNT_REQUEST,
  CHECK_CUSTOMER_AMOUNT_SUCCESS,
  CHECK_CUSTOMER_AMOUNT_FAILURE,
  CHOOSE_SEATS_REQUEST,
  CHOOSE_SEATS_SUCCESS,
  CHOOSE_SEATS_FAILURE,
  CLEAR_ALL
} from './constants';

const initialState = fromJS({
  completeLevel: 0,
  loading: false,
  guide: '',
  error: false,
  errorMessage: '',
  customerAmount: 0,
  seatsIsSelect: ''
});

function setCompleteLevelFromCheckCustomer(state) {
  let completeLevel = Number(state.get('completeLevel'));

  //conditaion for set complete level
  return ( completeLevel === 0)
    ? 1
    : completeLevel;
}

function setCompleteLevelFromChooseSeats(state) {
  let completeLevel = Number(state.get('completeLevel'));

  //conditaion for set complete level
  return ( completeLevel === 1 )
    ? 2
    : completeLevel;
}

function createBillReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_CUSTOMER_AMOUNT_REQUEST:
      return state
        .set('error', false)
        .set('customerAmount', action.customerAmount)
        .set('errorMessage', '');
    case CHECK_CUSTOMER_AMOUNT_SUCCESS:
      return state
        .set('completeLevel', setCompleteLevelFromCheckCustomer(state))
    case CHECK_CUSTOMER_AMOUNT_FAILURE:
      return state
        .set('error', true)
        .set('completeLevel', 0)
        .set('errorMessage', 'ไม่สามารถสร้างบิลได้เนื่องจาก จำนวนลูกค้ามากกว่าจำนวนที่นั่งที่ว่างอยู่')
        .set('seatsIsSelect', '');
    case CLEAR_ALL:
      return state
        .set('completeLevel', 0)
        .set('loading', false)
        .set('guide', '')
        .set('error', false)
        .set('errorMessage', '')
        .set('customerAmount', 0)
        .set('seatsIsSelect', '');
    case CHOOSE_SEATS_REQUEST:
      return state
        .set('error', false)
        .set('seatsIsSelect', action.seatsIsSelect)
        .set('errorMessage', '');
    case CHOOSE_SEATS_SUCCESS:
      return state
        .set('completeLevel', setCompleteLevelFromChooseSeats(state))
    case CHOOSE_SEATS_FAILURE:
      return state
        .set('error', true)
        .set('completeLevel', 1)
        .set('errorMessage', 'ไม่สามารถสร้างบิลได้เนื่องจาก จำนวนที่นั่งที่เลือกมากกว่าจำนวนลูกค้า');
    default:
      return state;
  }
}

export default createBillReducer;
