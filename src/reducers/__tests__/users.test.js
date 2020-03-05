import { normalizeUsers } from '../users/users.normalizers'
import usersMock from '../__mocks__/users.mock'

describe('Users reducer test', () => {
  it('Should normalize users correctly', () => {
    const input = usersMock.response
    const expected = usersMock.normalized
    expect(normalizeUsers(input)).toEqual(expected)
  })
})
