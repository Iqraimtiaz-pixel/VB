export const saveUser = (user) => {
  localStorage.setItem('vibez_user', JSON.stringify(user))
}

export const loadUser = () => {
  const user = localStorage.getItem('vibez_user')
  return user ? JSON.parse(user) : null
}

export const clearUser = () => {
  localStorage.removeItem('vibez_user')
}
