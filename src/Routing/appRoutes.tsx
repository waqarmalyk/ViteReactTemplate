import { App } from "../App";
import { RoutePathDefinition } from "./RoutePathDefinition";

export const appRoutes: RoutePathDefinition[] = [
  {
    title: "Home",
    path: "/",
    element: <App />,
    nav: true,
  },
];
