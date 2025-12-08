export type Route = {
  path: string;
  label: string;
  id: number;
};

export const getHomePage = () => "/home";
export const getAboutPage = () => "/about";
export const getMoviesPage = () => "/movies";
export const getSeriesPage = () => "/series";

export const routesMap: Record<string, Route> = {
  home: {
    id: 1,
    path: getHomePage(),
    label: "Home",
  },
  movies: {
    id: 2,
    path: getMoviesPage(),
    label: "Movies",
  },
  series: {
    id: 3,
    path: getSeriesPage(),
    label: "Series",
  },
  about: {
    id: 4,
    path: getAboutPage(),
    label: "About",
  },
};

export const routes = Object.entries(routesMap).map((route) => route[1]);
