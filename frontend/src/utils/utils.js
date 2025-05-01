import axios from "axios"

export const saveUser = async user => {
    await axios.post('http://localhost:9000/users/${user?.email}', {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    })
  }