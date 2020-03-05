export const getUSerDetails =  state => state.user

export const getUserName = state => {
  const { name } = getUSerDetails(state)
  return name
}

export const getLastName = state => {
  const { lastName } = getUSerDetails(state)
  return lastName
}

export const getEmail = state => {
  const { email } = getUSerDetails(state)
  return email
}

export const getAvatar = state => {
  const { avatar } = getUSerDetails(state)
  return avatar
}
