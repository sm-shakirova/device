import React, { useState } from 'react';
import { LoginForm } from '../../blocks';
import { List, Login, Cart, Logout } from './styles';
import { $users, logOut } from "../../../model/users";
import { useStore } from "effector-react";

export interface IUserNavProps {
  width?: string;
  className?: string;
}

const UserNav: React.FC<IUserNavProps> = ({ width, className }) => {
  const [popup, setPopup] = useState(false);
  const [alert, setAlert] = useState(false);
  const users = useStore($users);

  return (
    <List className={className} width={width}>
      <li key='1'>
        {users.isLogged ? (
          <>
            <Login as='p' withoutHover>
              {users.currentUser.name}
            </Login>
            <Logout onClick={() => {
              logOut();
              setPopup(false);
            }}>
              Выйти
            </Logout>
          </>
        ) : (
          <>
            <Login onClick={() => {
              setAlert(false);
              setPopup(true);
            }}>
              Войти
            </Login>
            <LoginForm
              isOpen={popup}
              setOpen={setPopup}
              alert={alert}
              setAlert={setAlert}
            />
          </>
        )}
      </li>
      <li key='2'>
        <Cart>
          Корзина
        </Cart>
      </li>
    </List>
  )
};

export default UserNav;
