/*
 *
 * ManageSeats actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_SEATS_REQUEST,
  LOAD_SEATS_SUCCESS,
  LOAD_SEATS_FAILURE,
  LISTENING_SEATS_REQUEST,
  LISTENING_SEATS_SUCCESS,
  LISTENING_SEATS_FAILURE
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
} 

export function loadSeats() {
  return {
    type: LOAD_SEATS_REQUEST
  };
}

export function seatsLoaded(seats) {
  return {
    type: LOAD_SEATS_SUCCESS,
    seats: seats
  };
}

export function seatsLoadedError(error) {
  return {
    type: LOAD_SEATS_FAILURE,
    errer: error
  };
}





