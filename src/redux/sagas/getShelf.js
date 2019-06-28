import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* getShelfItems() {
    try {
        const response = yield axios.get('/api/shelf');
        yield put({ type: 'SHELF_ITEMS_DATA', payload: response.data });
    } catch (error) {
        console.log('Error with get client route:', error)
    }
}

function* shelfSaga() {
    yield takeEvery('GET_SHELF_ITEMS', getShelfItems);
}

export default shelfSaga;