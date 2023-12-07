import axios from 'axios';

interface RegisterProps {
  name: string;
  loginId: string;
  password: string;
  email: string;
}

const createUser = async ({
  name,
  loginId,
  password,
  email,
}: RegisterProps) => {
  await axios
    .post('http://3.34.121.245:8080/auth/register', {
      loginId: loginId,
      password: password,
      name: name,
      email: email,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default createUser;
