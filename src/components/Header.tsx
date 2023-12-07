import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAppSelector } from '../store/useTypedSelector';
import LogoutButton from './LogoutButton';

function Header() {
  const { userId, isLogin } = useAppSelector((state) => state.root.user);

  return (
    <main className="p-8">
      <div className="flex flex-row justify-between bg-black p-2">
        <h1 className="font-bold text-4xl text-neutral-50">
          Enjoy Your Shopping !
        </h1>
        {isLogin ? (
          <div>
            <h1 className="font-bold text-4xl text-neutral-50">
              {userId}님 안녕하세요
            </h1>
            <LogoutButton />
          </div>
        ) : (
          <div>
            <button className="bg-white p-2 mr-2">
              <Link to={'login'}>로그인</Link>
            </button>
            <button className="bg-white p-2">
              <Link to={'register'}>회원가입</Link>
            </button>
          </div>
        )}
      </div>
      <Outlet />
    </main>
  );
}

export default Header;
