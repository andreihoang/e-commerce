import { CATEGORIES_TYPE_ACTIONS } from "./categories.type";

const INITIAL_STATE = {
    categoriesMap: {},
}

export const categoriesReducer = (state=INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch(type) {
        case CATEGORIES_TYPE_ACTIONS.SET_CATEGORIES_MAP:
            return {...state, categoriesMap: payload};
        default:
            return state;
    }
}