import { AuthState } from './types';
import {
  LOG_IN_REQUEST, LOG_IN_SUCCEEDED, LOG_IN_FAILED, SIGN_UP,
} from './actions';
import { ReducerAction } from '../commonTypes';

const initialAuthState: AuthState = {
  user: null,
};

const authReducer = (state = initialAuthState, action: ReducerAction): AuthState => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...state,
      };
    }
    case LOG_IN_SUCCEEDED: {
      return {
        ...state,
        user: {
          ...action.data,
        },
      };
    }
    case SIGN_UP: {
      return {
        ...state,
        ...action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
