import {RootState} from '~shared/redux/redux-store';

export const selectIsAuth = (state: RootState) => state.user.isAuth

export const selectFetchGetUser = (state: RootState) => state.user.fetchGetUser

export const selectFetchLogin = (state: RootState) => state.user.fetchLogin

export const selectFetchLogout = (state: RootState) => state.user.fetchLogout