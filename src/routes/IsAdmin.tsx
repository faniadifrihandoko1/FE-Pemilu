import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IsAdminProps {
  children: ReactNode;
}

const IsAdmin: React.FC<IsAdminProps> = ({ children }) => {
  const fakeAdmin = false;

  if (!fakeAdmin) return <Navigate to="/" />;

  return <>{children}</>;
};

export default IsAdmin;
