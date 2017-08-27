
import { fromJS } from 'immutable';
import reservationSeatReducer from '../reducer';

describe('reservationSeatReducer', () => {
  it('returns the initial state', () => {
    expect(reservationSeatReducer(undefined, {})).toEqual(fromJS({}));
  });
});
