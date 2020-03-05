export const normalizeUserItem = user => {
  const { id, name, avatar, age, ...rest } = user

  return {
    id, name, avatar, age, ...rest
  }
}

export const normalizeUsers = (users = []) => {
  users.reduce((memo, user) => {
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

