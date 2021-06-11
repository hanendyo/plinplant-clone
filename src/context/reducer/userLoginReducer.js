export const userLoginReducer = (state, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return { ...action.payload };

    case 'USER_UPDATE_FILEIMG':
      return state.filter((user) =>
        user.pk_user_id === action.payload.pk_user_id
          ? { ...user, picture: action.payload.picture }
          : user
      );

    case 'USER_LOGOUT':
      return {};

    default:
      return state;
  }
};
