import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
type cheldrin = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: cheldrin) {
  if (!localStorage.getItem('token')) {
    return <Navigate to="/" />;
  } else return children;
}
