import { createSelector } from 'reselect';

/**
 * Direct selector to the manageSeats state domain
 */
const selectManageSeatsDomain = () => (state) => state.get('manageSeats');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ManageSeats
 */

const makeSelectManageSeats = () => createSelector(
  selectManageSeatsDomain(),
  (substate) => substate.toJS()
);

const makeSelectLoading = () => createSelector(
  selectManageSeatsDomain(),
  (substate) => substate.get('loading')
);

const makeSelectGuide = () => createSelector(
  selectManageSeatsDomain(),
  (substate) => substate.get('guide')
);

 
const makeSelectError = () => createSelector(
  selectManageSeatsDomain(),
  (substate) => substate.get('error')
);

const makeSelectErrorMessage = () => createSelector(
  selectManageSeatsDomain(),
  (substate) => substate.get('errorMessage')
);

const makeSelectSeatsZoneA = () => createSelector(
  selectManageSeatsDomain(),
  (substate) => substate.get('seatsZoneA').toJS()
);

const makeSelectSeatsZoneBLimit8 = () => createSelector(
  selectManageSeatsDomain(),
  (substate) => substate.get('seatsZoneBLimit8').toJS()
);

const makeSelectSeatsZoneBLimit4 = () => createSelector(
  selectManageSeatsDomain(),
  (substate) => substate.get('seatsZoneBLimit4').toJS()
);

const makeSelectSeatsZoneBLimit2 = () => createSelector(
  selectManageSeatsDomain(),
  (substate) => substate.get('seatsZoneBLimit2').toJS()
);

export default makeSelectManageSeats;
export {
  selectManageSeatsDomain,
  makeSelectLoading,
  makeSelectGuide,
  makeSelectError,
  makeSelectErrorMessage,
  makeSelectSeatsZoneA,
  makeSelectSeatsZoneBLimit2,
  makeSelectSeatsZoneBLimit4,
  makeSelectSeatsZoneBLimit8
};
