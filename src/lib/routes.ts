// Navigation path constants
export const ROUTES = {
  HOME: "/",
  CHAT: "/chat",
  CALLBACK: "/callback",
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];

// Helper for consistent route access
export const getRoute = (route: keyof typeof ROUTES): Route => {
  return ROUTES[route];
};
