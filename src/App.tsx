import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from './redux/store/store';

function App() {
  const loggedIn = useSelector((s: RootState) => s?.loggedIn);

  return (
    <div id="main">
      {!loggedIn && <Navigate to={'/login'} />}
      <Outlet />
    </div>
  );
}

export default App;
