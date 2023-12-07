import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import getUser from '../apis/login';
import { useAppDispatch, useAppSelector } from '../store/useTypedSelector';
import { useNavigate } from 'react-router-dom';

type InputHandlerType = (event: ChangeEvent<HTMLInputElement>) => void;
type SubmitHandlerType = (event: FormEvent<HTMLFormElement>) => void;

function Login() {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const { isLogin, message } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLoginId: InputHandlerType = (event) =>
    setLoginId(event.target.value);

  const handlePassword: InputHandlerType = (event) =>
    setPassword(event.target.value);

  const handleSubmit: SubmitHandlerType = (event) => {
    event.preventDefault();

    dispatch(getUser({ loginId, password }));
  };

  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin, navigate]);

  return (
    <>
      {!isLogin && <h1>{message}</h1>}
      <h1 className="font-bold text-4xl">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-200 p-4 flex flex-col gap-2"
      >
        <div>
          <label>ID : </label>
          <input
            onChange={handleLoginId}
            type="text"
            placeholder="아이디를 입력하세요"
          />
        </div>
        <div>
          <label>Password : </label>
          <input
            onChange={handlePassword}
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <div>
          <button type="submit">LOGIN</button>
        </div>
      </form>
    </>
  );
}

export default Login;
