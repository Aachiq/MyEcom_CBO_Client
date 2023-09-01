import { API_URL } from "../env"

export const signInBo = (userAuth) => {
    return fetch(`${API_URL}/auth/signin`,{
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify(userAuth)
    })
}