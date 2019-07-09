import { call, put, takeLatest, select } from "redux-saga/effects";
import API from '../api';
import {
    DASHBOARD_ATTRACTION_ONMOUNT_REQUEST_NAME,
    DASHBOARD_ATTRACTION_ONMOUNT_SUCCESS,
    DASHBOARD_ATTRACTION_ONMOUNT_ERROR,
    DASHBOARD_ATTRACTION_SUBMIT_REQUEST_NAME,
    DASHBOARD_ATTRACTION_SUBMIT_SUCCESS,
    DASHBOARD_ATTRACTION_SUBMIT_ERROR,
} from "../actions/dashboardBulletin";
import {TOAST_ERROR_SHOW, TOAST_SUCCESS_SHOW} from "../actions/toast";
import {ADMIN_LOGOUT_REQUEST} from "../actions/admin";

const displayedData = (state) => state.dashboardAttraction.displayedData;

function onMount() {
    return API.get('/admin/dashboard/bulletin');
}

function submit(payload) {
    return API.post('/admin/dashboard/bulletin', { data: payload});
}

function* workerSagaOnMount() {
    try {
        const { data } = yield call(onMount);
        yield put(DASHBOARD_ATTRACTION_ONMOUNT_SUCCESS(data));
    } catch (error) {
        yield put(DASHBOARD_ATTRACTION_ONMOUNT_ERROR(error));
        const res = error.response;
        if (res) {
            if (res.status === 401) {
                yield put(ADMIN_LOGOUT_REQUEST());
            } else if (res.status === 422) {
                yield put(TOAST_ERROR_SHOW(res.data.error.message));
            } else {
                yield put(TOAST_ERROR_SHOW('Oops something went wrong'));
            }
        }
        if (error.message === "Network Error") {
            yield put(TOAST_ERROR_SHOW('Server Error'));
        }
    }
}

function* workerSagaSubmit() {
    try {
        const payload = yield select(displayedData);
        yield call(submit, payload);
        yield put(DASHBOARD_ATTRACTION_SUBMIT_SUCCESS(payload));
        yield put(TOAST_SUCCESS_SHOW('Refresh the page to see the changes'));
    } catch (error) {
        yield put(DASHBOARD_ATTRACTION_SUBMIT_ERROR(error));
        const res = error.response;
        if (res) {
            if (res.status === 401) {
                yield put(ADMIN_LOGOUT_REQUEST());
            } else if (res.status === 422) {
                yield put(TOAST_ERROR_SHOW(res.data.error.message));
            } else {
                yield put(TOAST_ERROR_SHOW('Oops something went wrong'));
            }
        }
        if (error.message === "Network Error") {
            yield put(TOAST_ERROR_SHOW('Server Error'));
        }
    }
}

export default [
    takeLatest(DASHBOARD_ATTRACTION_ONMOUNT_REQUEST_NAME, workerSagaOnMount),
    takeLatest(DASHBOARD_ATTRACTION_SUBMIT_REQUEST_NAME, workerSagaSubmit),

]