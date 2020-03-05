
export const getUsers = state => {
  const { usersById = {} , usersIds = [] } = state.users
  return usersIds.map(id => usersById[id])
}
export const getUserById = (state, id) => {
  const { usersById = {} } = state.users

  return usersById[id]
}
