import { CATEGORIES_TYPE_ACTIONS } from "./categories.type"

export const setCategoriesMap = (categories) => {
    return {
        type: CATEGORIES_TYPE_ACTIONS.SET_CATEGORIES_MAP,
        payload: categories,
    }
}