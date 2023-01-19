import { RouteObject, useRoutes } from "react-router-dom";

export interface RoutesRendererProps {
  routes: RouteObject[];
}

export function RoutesRenderer(props: RoutesRendererProps) {
  const { routes } = props;
  const renderedRoutes = useRoutes(routes);
  return renderedRoutes;
}
