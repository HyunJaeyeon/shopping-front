import { useState, ChangeEvent, FormEvent } from 'react';
import handleLogin from './handler';

type InputHandlerType = (event: ChangeEvent<HTMLInputElement>) => void;
type SubmitHandlerType = (event: FormEvent<HTMLFormElement>) => void;

function Login() {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginId: InputHandlerType = (event) =>
    setLoginId(event.target.value);

  const handlePassword: InputHandlerType = (event) =>
    setPassword(event.target.value);

  const handleSubmit: SubmitHandlerType = (event) => {
    event.preventDefault();
    // console.log(loginId, password);
    handleLogin({ loginId, password });
  };

  return (
    <>
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
