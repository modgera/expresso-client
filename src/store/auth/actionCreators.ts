import { Action } from '../commonTypes';
import { NewUser, LogInUser, User } from './types';
import {
  LOG_IN_REQUEST, LOG_IN_SUCCEEDED, LOG_IN_FAILED,
  SIGN_UP_REQUEST, SIGN_UP_SUCCEEDED, SIGN_UP_FAILED,
} from './actions';

export const signUpRequest = (newUser: NewUser): Action<NewUser> => ({
  type: SIGN_UP_REQUEST,
  data: newUser,
});

export const signUpSucceeded = (newUser: NewUser): Action<NewUser> => ({
  type: SIGN_UP_SUCCEEDED,
  data: newUser,
});

export const signUpFailed = (newUser: NewUser): Action<NewUser> => ({
  type: SIGN_UP_FAILED,
  data: newUser,
});

export const loginRequest = (user: LogInUser): Action<LogInUser> => ({
  type: LOG_IN_REQUEST,
  data: user,
});

export const loginSucceeded = (user: User): Action<User> => ({
  type: LOG_IN_SUCCEEDED,
  data: user,
});

export const loginFailed = (user: LogInUser): Action<LogInUser> => ({
  type: LOG_IN_FAILED,
  data: user,
});
