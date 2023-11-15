import { Navigate } from "react-router-dom";

interface Props {
  isAuthorized: boolean;
  children: JSX.Element;
}

const ProtectedRoute = ({ isAuthorized, children }: Props) => {
  if (!isAuthorized) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default ProtectedRoute;
