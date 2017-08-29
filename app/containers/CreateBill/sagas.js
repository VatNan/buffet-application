import { take, call, put, select, cancel, takeLatest, fork } from 'redux-saga/effects';
import {
  customerAmountPass,
  customerAmountFail,
  chooseSeats,
  chooseSeatsPass,
  chooseSeatsFail,
  createBillPass,
  createBillFail
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
  CHOOSE_SEATS_REQUEST,
  CREATE_BILL_REQUEST
} from './constants';
import { LOCATION_CHANGE } from 'react-router-redux';
import { push } from 'react-router-redux';
//pouchdb
import pouchdb from '../../config/pouchdb';
const db = pouchdb.db;
const sync = pouchdb.sync;

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
    if (previousCompleteLevel > 0) {
      let seatsIsSelect = yield select(makeSelectSeatsIsSelect());
      yield put(chooseSeats(seatsIsSelect));
    }
  } else {
    yield put(customerAmountFail());
  }

}

export function* chooseSeatsInSaga(action) {
  let seatsObj = yield select(makeSelectSeatsObject());
  let customerAmount = yield select(makeSelectCustomerAmount());
  let seatsIsSelectArray = action.seatsIsSelect.split(",");
  customerAmount = Number(customerAmount);

  //get sum
  let sumLimitOfseats = seatsIsSelectArray.reduce((total, seatId) => {
      if (!seatId) {
        return total += 0;
      }

      return total += seatsObj[seatId].limit;
    }, 0);
  
  if (sumLimitOfseats >= customerAmount) {
    yield put(chooseSeatsPass());
  } else {
    yield put(chooseSeatsFail());
  }

}

export function* chooseCreateBillSaga() {
  try {
    let customerAmount = yield select(makeSelectCustomerAmount());
    let seatsIsSelect = yield select(makeSelectSeatsIsSelect());
  
    let seatsObj = yield select(makeSelectSeatsObject());
    let seatsIsSelectArray = seatsIsSelect.split(",");
    let genareteId = 'bills:' + new Date().toJSON() + Math.random();
    //not best practice
    let setUpdateSeats =  seatsIsSelectArray.map((seatId) => {
      return {
        ...seatsObj[seatId],
        status: 'busy',
        billId: genareteId
      };
    });
  
    yield db.bulkDocs([
      {
        _id: genareteId,
        customerAmount,
        seatsIsSelect
      },
      ...setUpdateSeats
    ]);
    
    yield put(createBillPass());
    yield put(push(''));
  } catch (error) {
    yield put(createBillFail(error));
  }
}

export function* rootSagaCreateBill() {
  console.log("test=========>", push)
  const watcherCheckCustomer = yield takeLatest(CHECK_CUSTOMER_AMOUNT_REQUEST, checkCustomerAmount);
  const watchChooseSeats = yield takeLatest(CHOOSE_SEATS_REQUEST, chooseSeatsInSaga);
  const watchCreateBill = yield takeLatest(CREATE_BILL_REQUEST, chooseCreateBillSaga);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcherCheckCustomer);
  yield cancel(watchChooseSeats);
  yield cancel(watchCreateBill);
}

// All sagas to be loaded
export default [
  rootSagaCreateBill,
];
