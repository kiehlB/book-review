import { PageGrid } from '../layout/GridLayout';
import { IoSearchOutline } from 'react-icons/io5';

import { useContext, useEffect } from 'react';
import ModalContext from '../../context/modalContext';

import AuthContext from '../../context/authContext';

const iconTransformOrigin = { transformOrigin: '50% 100px' };

function AuthItem() {
  const { IsClose, SetIsClose, mode, SetMode } = useContext(ModalContext);
  const { isAuth, SetIsAuth } = useContext(AuthContext);

  let a;

  useEffect(() => {
    a = localStorage.getItem('CURRENT_USER');
  }, []);

  return (
    <>
      {a ? (
        'hi'
      ) : (
        <>
          {' '}
          <div
            className="pr-4 text-sm text-[#181A20] font-medium"
            onClick={() => {
              SetIsClose(!IsClose);
              SetMode('login');
            }}>
            Sign in
          </div>
          <div
            className="text-sm font-medium px-[20px] py-[10px] rounded-3xl bg-[#FCD535] text-[#181A20]"
            onClick={() => {
              SetIsClose(!IsClose);
              SetMode('register');
            }}>
            Sign up
          </div>
        </>
      )}
    </>
  );
}

export default AuthItem;
