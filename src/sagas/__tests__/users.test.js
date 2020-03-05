import { runSaga } from 'redux-saga';
import * as api from '../../api/api';
import { handleUsersLoad } from '../users';
import { setUsers, setError } from '../../actions/users';
import usersMock from '../__mocks__/users.mock'

describe('Users saga test', () => {
  it('should load and handle users in case of success', async () => {
    const dispatchedActions = [];

    const { users } = usersMock

    api.fetchUsers = jest.fn(() => Promise.resolve(users));

    const fakeStore = {
      getState: () => ({ users: {} }),
      dispatch: action => dispatchedActions.push(action),
    };

    await runSaga(fakeStore, handleUsersLoad).done;

    expect(api.fetchUsers.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(setUsers(users));
  })

  it('should handle users load errors in case of failure', async () => {
    const dispatchedActions = [];

    const error = 'API server is down';

    api.fetchUsers = jest.fn(() => Promise.reject(error));

    const fakeStore = {
      getState: () => ({ users: {} }),
      dispatch: action => dispatchedActions.push(action),
    };

    await runSaga(fakeStore, handleUsersLoad).done;

    expect(api.fetchUsers.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(setError(error));
  });
})

