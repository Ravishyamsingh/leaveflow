/**
 * Navigation utilities for dashboard routing and active route detection
 */

export interface IRoute {
  name: string;
  path: string;
  icon?: React.ReactNode;
  items?: IRoute[];
  collapse?: boolean;
  disabled?: boolean;
  secondary?: boolean;
}

// Check if window is available (for SSR safety)
export const isWindowAvailable = () => typeof window !== 'undefined';

// Find current route matching pathname
export const findCurrentRoute = (
  routes: IRoute[],
  pathname: string,
): IRoute | undefined => {
  for (let route of routes) {
    if (route.items) {
      const found = findCurrentRoute(route.items, pathname);
      if (found) return found;
    }
    if (pathname?.match(route.path) && route) {
      return route;
    }
  }
};

// Get active route name from pathname
export const getActiveRoute = (routes: IRoute[], pathname: string): string => {
  const route = findCurrentRoute(routes, pathname);
  return route?.name || 'Default Brand Text';
};

// Get navbar visibility based on route
export const getActiveNavbar = (
  routes: IRoute[],
  pathname: string,
): boolean => {
  const route = findCurrentRoute(routes, pathname);
  if (route?.secondary) return route?.secondary;
  else return false;
};

// Get navbar text based on route
export const getActiveNavbarText = (
  routes: IRoute[],
  pathname: string,
): string | boolean => {
  return getActiveRoute(routes, pathname) || false;
};
