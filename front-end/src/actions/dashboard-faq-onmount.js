import { createAction } from 'redux-actions';

export const DASHBOARD_FAQ_ONMOUNT_REQUEST_NAME = 'DASHBOARD_FAQ_ONMOUNT_REQUEST';
export const DASHBOARD_FAQ_ONMOUNT_REQUEST = createAction(DASHBOARD_FAQ_ONMOUNT_REQUEST_NAME);

export const DASHBOARD_FAQ_ONMOUNT_SUCCESS_NAME = 'DASHBOARD_FAQ_ONMOUNT_SUCCESS';
export const DASHBOARD_FAQ_ONMOUNT_SUCCESS = createAction(DASHBOARD_FAQ_ONMOUNT_SUCCESS_NAME);

export const DASHBOARD_FAQ_ONMOUNT_ERROR_NAME = 'DASHBOARD_FAQ_ONMOUNT_ERROR';
export const DASHBOARD_FAQ_ONMOUNT_ERROR = createAction(DASHBOARD_FAQ_ONMOUNT_ERROR_NAME);