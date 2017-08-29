import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import {
  customerAmountPass,
  customerAmountFail,
  chooseSeats,
  chooseSeatsPass,
  chooseSeatsFail
} from './actions';
import {
  makeSelectTotal,
  makeSelectSeatsObject,
  makeSelectCustomerAmount,
  makeSelectCompleteLevel,
  makeSelectSeatsIsSelect
} from './selectors';
import {
  CHECK_CUSTOMER_AMOUNT_REQUEST,
  CHOOSE_SEATS_REQUEST
} from './constants';

export function* checkCustomerAmount(action) {
  // console.log("customerAmout in saga", customerAmout)
  let previousCompleteLevel = yield select(makeSelectCompleteLevel());
  console.log(previousCompleteLevel);
  let total = yield select(makeSelectTotal());
  let customerAmout = Number(action.customerAmount);
  total = Number(total);

  if (customerAmout <= total) {
    yield put(customerAmountPass());

    //fix for before previousCompleteLevel > 0
    console.log("valid", previousCompleteLevel);
    if (previousCompleteLevel > 0) {
      let seatsIsSelect = yield select(makeSelectSeatsIsSelect());
      yield put(chooseSeats(seatsIsSelect));
    }
  } else {
    console.log("fail");
    yield put(customerAmountFail());
  }

}

export function* chooseSeatsInSaga(action) {
  let seatsObj = yield select(makeSelectSeatsObject());
  let customerAmount = yield select(makeSelectCustomerAmount());
  let seatsIsSelect = action.seatsIsSelect.split(",");
  customerAmount = Number(customerAmount);

  //get sum
  let sumLimitOfseats = seatsIsSelect.reduce((total, seatId) => {
      if (!seatId) {
        return total += 0;
      }

      return total += seatsObj[seatId].limit;
    }, 0);
  

  console.log("sumLimitOfseats     ", sumLimitOfseats, customerAmount);
  if (sumLimitOfseats >= customerAmount) {
    yield put(chooseSeatsPass());
  } else {
    yield put(chooseSeatsFail());
  }

}



export function* rootSagaCreateBill() {
  const watcherCheckCustomer = yield takeLatest(CHECK_CUSTOMER_AMOUNT_REQUEST, checkCustomerAmount);
  const watchChooseSeats = yield takeLatest(CHOOSE_SEATS_REQUEST, chooseSeatsInSaga)
}

// All sagas to be loaded
export default [
  rootSagaCreateBill,
];
