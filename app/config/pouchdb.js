import pouchdb from 'pouchdb';

const db = new pouchdb('buffet_application');
//development url
const remotedDB = new pouchdb('http://127.0.0.1:5984/buffet_application');

const opts = {
    live: true,
    retry: true
};

const sync = pouchdb.sync(db, remotedDB, opts)

export default {
    sync,
    db 
};