import { useLocation, useNavigate, useParams } from "react-router-dom";
import React from "react";

export interface IWithRouterProps {
  location: ReturnType<typeof useLocation>;
  params: Record<string, string>;
  navigate: ReturnType<typeof useNavigate>;
}

export const withRouter = <Props extends IWithRouterProps>(
  Component: React.ComponentType<Props>
) => {
  return (props: Omit<Props, keyof IWithRouterProps>) => {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();

    return (
      <Component
        {...(props as Props)}
        location={location}
        params={params}
        navigate={navigate}
      />
    );
  };
};
