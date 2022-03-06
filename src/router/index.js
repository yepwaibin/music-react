import React from "react";
import { Redirect } from "react-router-dom";

const Discover = React.lazy(() => import("../pages/discover"))
const Recommend = React.lazy(() => import("../pages/discover/child-pages/recommend"))
const Ranking = React.lazy(() => import("../pages/discover/child-pages/ranking"))
const Songs = React.lazy(() => import("../pages/discover/child-pages/songs"))
const Djradio = React.lazy(() => import("../pages/discover/child-pages/djradio"))
const Artist = React.lazy(() => import("../pages/discover/child-pages/artist"))
const Album = React.lazy(() => import("../pages/discover/child-pages/album"))
const Player = React.lazy(() => import("../pages/player"))
const Friend = React.lazy(() => import("../pages/friend"))
const Mine = React.lazy(() => import("../pages/mine"))

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: Discover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        component: Recommend,
      },
      {
        path: "/discover/toplist",
        component: Ranking,
      },
      {
        path: "/discover/playlist",
        component: Songs,
      },
      {
        path: "/discover/djradio",
        component: Djradio,
      },
      {
        path: "/discover/artist",
        component: Artist,
      },
      {
        path: "/discover/album",
        component: Album,
      },
      {
        path: "/discover/player",
        component: Player,
      },
    ],
  },
  {
    path: "/mine",
    component: Mine,
  },
  {
    path: "/friend",
    component: Friend,
  },
];
export default routes;
