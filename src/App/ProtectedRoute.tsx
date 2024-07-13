// ProtectedRoute.tsx
import { RootState } from '@/store';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
interface PrivateRouteProps {
  Component: FC;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ Component }) => {
  const authToken = useSelector(
    (state: RootState) => state.AuthToken.authToken,
  );
  return authToken ? <Component /> : <Navigate to="/" />;
};
export default PrivateRoute;
