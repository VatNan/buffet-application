import { createSelector } from 'reselect';

/**
 * Direct selector to the reservationSeat state domain
 */
const selectReservationSeatDomain = () => (state) => state.get('reservationSeat');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ReservationSeat
 */

const makeSelectReservationSeat = () => createSelector(
  selectReservationSeatDomain(),
  (substate) => substate.toJS()
);

const makeSelectLoading = () => createSelector(
  selectReservationSeatDomain(),
  (substate) => substate.get('loading')
);

const makeSelectGuide = () => createSelector(
  selectReservationSeatDomain(),
  (substate) => substate.get('guide')
);

 
const makeSelectError = () => createSelector(
  selectReservationSeatDomain(),
  (substate) => substate.get('error')
);

const makeSelectErrorMessage = () => createSelector(
  selectReservationSeatDomain(),
  (substate) => substate.get('errorMessage')
);

const makeSelectSeatsZoneA = () => createSelector(
  selectReservationSeatDomain(),
  (substate) => substate.get('seatsZoneA').toJS()
);

const makeSelectSeatsZoneBLimit8 = () => createSelector(
  selectReservationSeatDomain(),
  (substate) => substate.get('seatsZoneBLimit8').toJS()
);

const makeSelectSeatsZoneBLimit4 = () => createSelector(
  selectReservationSeatDomain(),
  (substate) => substate.get('seatsZoneBLimit4').toJS()
);

const makeSelectSeatsZoneBLimit2 = () => createSelector(
  selectReservationSeatDomain(),
  (substate) => substate.get('seatsZoneBLimit2').toJS()
);

export default makeSelectReservationSeat;
export {
  selectReservationSeatDomain,
  makeSelectLoading,
  makeSelectGuide,
  makeSelectError,
  makeSelectErrorMessage,
  makeSelectSeatsZoneA,
  makeSelectSeatsZoneBLimit2,
  makeSelectSeatsZoneBLimit4,
  makeSelectSeatsZoneBLimit8
};
