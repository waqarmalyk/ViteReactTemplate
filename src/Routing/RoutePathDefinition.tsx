import { RouteObject } from "react-router-dom";

export type RoutePathDefinition = RouteObject & {
  title: string;
  nav?: boolean;
  children?: RoutePathDefinition[];
  path: string;
}
