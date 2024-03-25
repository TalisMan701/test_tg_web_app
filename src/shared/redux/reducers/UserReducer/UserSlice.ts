import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '~shared/types/IUser';

interface UserState {
  user: IUser | null;
  fetchGetUser: boolean;
  errorGetUser: string;
  fetchLogin: boolean;
  fetchLogout: boolean;
  isAuth: boolean;
}

const initialState: UserState = {
  user: null,
  fetchGetUser: true,
  fetchLogin: false,
  fetchLogout: false,
  errorGetUser: '',
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, {payload}: PayloadAction<IUser>) {
      state.user = payload;
    },
    setFetchGetUser(state, {payload}: PayloadAction<boolean>) {
      state.fetchGetUser = payload;
    },
    setIsAuth(state, {payload}: PayloadAction<boolean>) {
      state.isAuth = payload;
      state.fetchGetUser = false;
      state.fetchLogin = false;
    },
    setFetchLogin(state, {payload}: PayloadAction<boolean>) {
      state.fetchLogin = payload;
    },
    setFetchLogout(state, {payload}: PayloadAction<boolean>) {
      state.fetchLogout = payload;
    },
    logoutLocal() {
      return {...initialState, fetchGetUser: false};
    },
  },
});

export const {setUser, setFetchGetUser, setIsAuth, setFetchLogin, logoutLocal, setFetchLogout} =
  userSlice.actions;
