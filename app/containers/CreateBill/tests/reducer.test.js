
import { fromJS } from 'immutable';
import createBillReducer from '../reducer';

describe('createBillReducer', () => {
  it('returns the initial state', () => {
    expect(createBillReducer(undefined, {})).toEqual(fromJS({}));
  });
});
