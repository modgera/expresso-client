export const LOG_IN = 'LOG_IN';
export const SIGN_UP = 'SIGN_UP';

export interface LogInUser {
  cellNumber: string;
  password: string;
}

export interface NewUser extends LogInUser{
  name: string;
}

export interface User {
  cellNumber: string;
  name: string;
  email: string;
}

export interface AuthState {
  user: User;
}
