import { RouteObject, useRoutes } from "react-router-dom";

export interface IRoutesRendererProps {
  routes: RouteObject[];
}

export function RoutesRenderer(props: IRoutesRendererProps) {
  const { routes } = props;
  const renderedRoutes = useRoutes(routes);
  return renderedRoutes;
}
