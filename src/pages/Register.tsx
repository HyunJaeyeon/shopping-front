import { useState, FormEvent, ChangeEvent } from 'react';
import handleRegister from './user';

type InputHandlerType = (event: ChangeEvent<HTMLInputElement>) => void;
type SubmitHandlerType = (event: FormEvent<HTMLFormElement>) => void;

function Register() {
  const [name, setName] = useState('');
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleName: InputHandlerType = (event) => setName(event.target.value);

  const handleLoginId: InputHandlerType = (event) =>
    setLoginId(event.target.value);

  const handlePassword: InputHandlerType = (event) =>
    setPassword(event.target.value);

  const handleEmail: InputHandlerType = (event) => setEmail(event.target.value);

  const handleSubmit: SubmitHandlerType = (event) => {
    event.preventDefault();

    handleRegister({ name, loginId, password, email });
  };

  return (
    <>
      <h1 className="font-bold text-4xl">register</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-200 p-4 flex flex-col gap-2"
      >
        <div>
          <label>Name : </label>
          <input
            onChange={handleName}
            type="text"
            value={name}
            placeholder="이름을 입력하세요"
          />
        </div>
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
          <label>Confirm Password : </label>
          <input type="password" placeholder="비밀번호를 다시 입력해주세요" />
        </div>
        <div>
          <label>Email : </label>
          <input
            onChange={handleEmail}
            type="email"
            placeholder="이메일을 입력해주세요"
          />
        </div>
        <div>
          <button type="submit">회원가입</button>
        </div>
      </form>
    </>
  );
}

export default Register;
