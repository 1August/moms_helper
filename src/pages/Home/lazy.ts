import { lazy } from "react";

export const HomeLazy = lazy(() =>
  import("./Home.tsx").then(({ Home }) => ({ default: Home }))
);
