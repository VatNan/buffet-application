/*
 *
 * CreateBill actions
 *
 */

import {
  DEFAULT_ACTION,
  CHECK_CUSTOMER_AMOUNT_REQUEST,
  CHECK_CUSTOMER_AMOUNT_SUCCESS,
  CHECK_CUSTOMER_AMOUNT_FAILURE,
  CLEAR_ALL,
  CHOOSE_SEATS_REQUEST,
  CHOOSE_SEATS_SUCCESS,
  CHOOSE_SEATS_FAILURE,
  CREATE_BILL_REQUEST,
  CREATE_BILL_SUCCESS,
  CREATE_BILL_FAILURE
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function checkCustomerAmount(customerAmount) {
  return {
    type: CHECK_CUSTOMER_AMOUNT_REQUEST,
    customerAmount
  };
}

export function customerAmountPass() {
  return {
    type: CHECK_CUSTOMER_AMOUNT_SUCCESS,
  };
} 

export function customerAmountFail() {
  return {
    type: CHECK_CUSTOMER_AMOUNT_FAILURE,
  };
}

export function clearAll() {
  return {
    type: CLEAR_ALL
  };
}

export function chooseSeats(seatsIsSelect) {
  return {
    type: CHOOSE_SEATS_REQUEST,
    seatsIsSelect
  };
}

export function chooseSeatsPass() {
  return {
    type: CHOOSE_SEATS_SUCCESS
  };
}

export function chooseSeatsFail() {
  return {
    type: CHOOSE_SEATS_FAILURE
  };
}

export function createBill() {
  return {
    type: CREATE_BILL_REQUEST
  };
}

export function createBillPass() {
  return {
    type: CREATE_BILL_SUCCESS
  };
}

export function createBillFail(error) {
  return {
    type: CREATE_BILL_FAILURE,
    error
  };
}
