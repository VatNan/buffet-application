import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import {
  seatsLoaded,
  seatsLoadedError
} from './actions';
import {
  LOAD_SEATS_REQUEST,
} from './constants';
// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}
//pouchdb
import pouchdb from '../../config/pouchdb';
const db = pouchdb.db;
const sync = pouchdb.sync;

export function* getSeats() {
  try {
    const seats = yield db.allDocs({
      include_docs: true,
      startkey: 'seats',
      endkey: 'seats\ufff0'
    });

    yield put(seatsLoaded(seats.rows));
    //listenging here

  } catch (error) {
    yield put(seatsLoadedError(err));
  }
}

export function* rootSagaSeats() {
  const watcher = yield takeLatest(LOAD_SEATS_REQUEST, getSeats);
  // yield cancel(watcher);
  // yield cancel(watcher);
}



// All sagas to be loaded
export default [
  rootSagaSeats,
];
