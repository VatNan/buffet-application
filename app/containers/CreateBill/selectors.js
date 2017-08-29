import { createSelector } from 'reselect';

/**
 * Direct selector to the createBill state domain
 */
const selectCreateBillDomain = () => (state) => state.get('createBill');
const selectManageSeatsDomain = () => (state) => state.get('manageSeats');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CreateBill
 */

const makeSelectCreateBill = () => createSelector(
  selectCreateBillDomain(),
  (substate) => substate.toJS()
);

const makeSelectCompleteLevel = () => createSelector(
  selectCreateBillDomain(),
  (substate) => substate.get('completeLevel')
);

const makeSelectLoading = () => createSelector(
  selectCreateBillDomain(),
  (substate) => substate.get('loading')
);

const makeSelectGuide = () => createSelector(
  selectCreateBillDomain(),
  (substate) => substate.get('guide')
);

const makeSelectError = () => createSelector(
  selectCreateBillDomain(),
  (substate) => substate.get('error')
);

const makeSelectErrorMessage = () => createSelector(
  selectCreateBillDomain(),
  (substate) => substate.get('errorMessage')
);

const makeSelectCustomerAmount = () => createSelector(
  selectCreateBillDomain(),
  (substate) => substate.get('customerAmount')
);

const makeSelectSeatsIsSelect = () => createSelector(
  selectCreateBillDomain(),
  (substate) => substate.get('seatsIsSelect').toJS()
);

const makeSelectMax = () => createSelector(
  selectManageSeatsDomain(),
  (substate) => substate.get('max')
);

const makeSelectTotal = () => createSelector(
  selectManageSeatsDomain(),
  (substate) => substate.get('total')
);

const makeSelectSeats = () => createSelector(
  selectManageSeatsDomain(),
  (substate) => {
    let seatsZoneA = substate.get('seatsZoneA').toJS(); 
    let seatsZoneBLimit8 = substate.get('seatsZoneBLimit8').toJS(); 
    let seatsZoneBLimit4 =  substate.get('seatsZoneBLimit4').toJS(); 
    let seatsZoneBLimit2 =  substate.get('seatsZoneBLimit2').toJS();
    //get all seats
    let allSeat = seatsZoneA
      .concat(seatsZoneBLimit8)
      .concat(seatsZoneBLimit4)
      .concat(seatsZoneBLimit2);

    //get seats have status = free
    let seatsFree = allSeat.filter((seat) => {
      return seat.status === "free";
    })

    //edit format seats for react-select
    let seatsForSelect = seatsFree.map((seatFree) => {
      return ({
        label: seatFree.zone + seatFree.no,
        value: seatFree._id
      });
    });

    return seatsForSelect;
  }
);

export default makeSelectCreateBill;
export {
  selectCreateBillDomain,
  makeSelectCompleteLevel,
  makeSelectCustomerAmount,
  makeSelectError,
  makeSelectErrorMessage,
  makeSelectGuide,
  makeSelectLoading,
  makeSelectMax,
  makeSelectSeatsIsSelect,
  makeSelectTotal,
  makeSelectSeats
};
