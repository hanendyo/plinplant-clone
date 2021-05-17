export const SignUpReducer = (state, action) => {
    if (action.type === 'SET_SIGN_UP') {
        return {
            ...state,
            [action.data]: action.value
        }
    }
    return state;
}
