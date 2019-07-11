import { createAction } from 'redux-actions';

export const CONTACT_ONMOUNT_REQUEST_NAME = 'CONTACT_ONMOUNT_REQUEST';
export const CONTACT_ONMOUNT_REQUEST = createAction(CONTACT_ONMOUNT_REQUEST_NAME);
export const CONTACT_ONMOUNT_SUCCESS_NAME = 'CONTACT_ONMOUNT_SUCCESS';
export const CONTACT_ONMOUNT_SUCCESS = createAction(CONTACT_ONMOUNT_SUCCESS_NAME);
export const CONTACT_ONMOUNT_ERROR_NAME = 'CONTACT_ONMOUNT_ERROR';
export const CONTACT_ONMOUNT_ERROR = createAction(CONTACT_ONMOUNT_ERROR_NAME);

export const CONTACT_FORM_REQUEST_NAME = 'CONTACT_FORM_REQUEST';
export const CONTACT_FORM_REQUEST = createAction(CONTACT_FORM_REQUEST_NAME);
export const CONTACT_FORM_SUCCESS_NAME = 'CONTACT_FORM_SUCCESS';
export const CONTACT_FORM_SUCCESS = createAction(CONTACT_FORM_SUCCESS_NAME);
export const CONTACT_FORM_ERROR_NAME = 'CONTACT_FORM_ERROR';
export const CONTACT_FORM_ERROR = createAction(CONTACT_FORM_ERROR_NAME);