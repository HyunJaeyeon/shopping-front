import { persistor } from '../store';

const LogoutButton = () => {
  const purge = async () => {
    await persistor.purge();
  };

  return (
    <button onClick={purge} className="bg-white p-2 ">
      로그아웃
    </button>
  );
};
export default LogoutButton;
