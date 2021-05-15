export const CmsReducer = (state, action) => {
    if (action.type === 'SET_CMS_INPUT') {
        return {
            ...state,
            [action.data]: action.value
        }
    }

    return state;
}