import { handleActions } from 'redux-actions';

const initialState = {
    heatmap: [],
    transactions: [],
    fetching: false,
    error: false,
};

export const dashboardOnMountReducer = handleActions({
    "DASHBOARD_ONMOUNT_REQUEST": (state) => {
        return {
            ...state,
            fetching: true,
            error: false,
        };
    },
    "DASHBOARD_ONMOUNT_SUCCESS": (state, action) => {
        return {
            ...state,
            fetching: false,
            heatmap: action.payload.heatmap,
            transactions: action.payload.transactions,
            error: false,
        };
    },
    "DASHBOARD_ONMOUNT_ERROR": (state, action) => {
        return {
            ...state,
            fetching: false,
            error: action.payload,
        };
    },
}, initialState);
