/*
 *
 * ManageSeats reducer
 *
 */

import { fromJS, List } from 'immutable';
import {
  DEFAULT_ACTION,
  LOAD_SEATS_REQUEST,
  LOAD_SEATS_SUCCESS,
  LOAD_SEATS_FAILURE
} from './constants';

const initialState = fromJS({
  loading: false,
  guide: '',
  error: false,
  errorMessage: '',
  seatsZoneA: [],
  seatsZoneBLimit8: [], // have 8 seat per 1 table
  seatsZoneBLimit4: [], // have 4 seat per 1 table
  seatsZoneBLimit2: [], // have 2 seat per 1 table
  max: 0,
  total: 0
});

function clearSeats(state) {
  return state
    .set('seatsZoneA', List([]))
    .set('seatsZoneBLimit8', List([]))
    .set('seatsZoneBLimit4', List([]))
    .set('seatsZoneBLimit8', List([]));
}

function setSeatsFirstTime(state, action) {
    //validate data
    if (!action.seats || action.seats.length === 0) {
      return state;
    }


    //variable of save max and total of seat
    let max = 0;
    let total = 0;

    //clear seats
    state = clearSeats(state);

    action.seats.map((seat, index) => {
      let name = "";
      seat = seat.doc;

      // group seats by zone and limit
      if (seat.zone === "A") name = "seatsZoneA";
      else if(seat.zone === "B" && seat.limit == 8) name = "seatsZoneBLimit8";
      else if(seat.zone === "B" && seat.limit == 4) name = "seatsZoneBLimit4";
      else if(seat.zone === "B" && seat.limit == 2) name = "seatsZoneBLimit2";
      //count max and total of seats
      max += seat.limit;
      if (seat.status === "free") {
        total += seat.limit;
      }

      state = state
        .updateIn([ name ], seatGroup => {
          return seatGroup.push(seat);
        });
    });

    return state
      .set('loading', false)
      .set('max', max)
      .set('total', total);
}

function manageSeatsReducer(state = initialState, action) {
  switch (action.type) {
    // case DEFAULT_ACTION:
    //   return state;
    case LOAD_SEATS_REQUEST:
      return state
        .set('loading', true)
        .set('error', false)
        .set('errorMessage', "");

    case LOAD_SEATS_SUCCESS: //TODO
      return setSeatsFirstTime(state, action);

    case LOAD_SEATS_FAILURE: //TODO
      return state
      .set("loading", false)
      .set("error", true)
      .set("errorMessage", "ไม่สามารถดึงข้อมูล seat ได้");

    default:
      return state;
      
  }
}

export default manageSeatsReducer;
