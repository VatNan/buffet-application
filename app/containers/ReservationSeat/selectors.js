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

export default makeSelectReservationSeat;
export {
  selectReservationSeatDomain,
};
