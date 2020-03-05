export const normalizeUserItem = user => {
  const { id, email, first_name, last_name, avatar, ...rest } = user

  return {
    id, name: first_name, lastName: last_name, avatar, ...rest
  }
}

export const normalizeUsers = (users = {}) => {
  const { data } = users
  return data.reduce((memo, user) => {
    const data = normalizeUserItem(user)

    const { id } = data

    memo.usersById[id] = { id, ...data }
    memo.usersIds = [...memo.usersIds, id]

    return memo

  }, {
    usersById: {},
    usersIds: []
  })
}

