import { Navigate, Outlet } from 'react-router-dom';

export default function AuthLayOut() {
  const token = localStorage.getItem('token');
  return <>{token ? <Navigate to={'/'} /> : <Outlet />}</>;
}
