import { queryUser, removeUser, addUser, updateUser } from '@/services/api';

export default {
  namespace: 'users',

  state: {
    data: {
      list: [],

    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryUser, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },

  },

  reducers: {
    save(state, action) {

      return {
        ...state,
        data: action.payload,
      };
    },
  },
};
