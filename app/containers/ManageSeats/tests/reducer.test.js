
import { fromJS } from 'immutable';
import ManageSeatsReducer from '../reducer';

describe('ManageSeatsReducer', () => {
  it('returns the initial state', () => {
    expect(ManageSeatsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
