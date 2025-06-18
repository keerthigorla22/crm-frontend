import React from 'react';
import { Navigate } from 'react-router-dom';
import { DefaultLayout } from '../../Layout/DefaultLayout';

// Normally you'd pull this from context or auth provider
const isAuth = true;

export const PrivateRoute = ({ children }) => {
  return isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Navigate to="/" replace />;
};
