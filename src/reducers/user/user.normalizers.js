
export const normalizeUserData = (response) => {
  const { data } = response
  const { first_name, last_name, email, avatar } = data
  return {
    name: first_name,
    lastName: last_name,
    email,
    avatar
  }
}
