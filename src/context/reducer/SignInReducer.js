export const SignInReducer = (state, action) => {
    if (action.type === 'SET_SIGN_UP') {
        return {
            ...state,
            [action.data]: action.value
        }
    }
    return state;
}