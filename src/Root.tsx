import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Root() {
  return (
    <main className="p-8">
      <div className="flex flex-row justify-between bg-black p-2">
        <h1 className="font-bold text-4xl text-neutral-50">
          Enjoy Your Shopping !
        </h1>
        <div>
          <button className="bg-white p-2 mr-2">
            <Link to={'login'}>로그인</Link>
          </button>
          <button className="bg-white p-2">
            <Link to={'register'}>회원가입</Link>
          </button>
        </div>
      </div>
      <Outlet />
    </main>
  );
}

export default Root;
