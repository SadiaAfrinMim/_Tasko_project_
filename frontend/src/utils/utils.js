import axios from "axios";

export const saveUser = async (user) => {
  await axios.post(
    "https://backend-lime-three-30.vercel.app/users/${user?.email}",
    {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    }
  );
};
