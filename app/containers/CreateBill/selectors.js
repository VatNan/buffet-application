import { createSelector } from 'reselect';

/**
 * Direct selector to the createBill state domain
 */
const selectCreateBillDomain = () => (state) => state.get('createBill');

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

export default makeSelectCreateBill;
export {
  selectCreateBillDomain,
};
