import * as React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from 'src/pages/Home';
import GameDetails from 'src/pages/GameDetails';
import GameList from 'src/pages/GameList';
import Genres from 'src/pages/Genres';
import Tags from 'src/pages/Tags';
import Publishers from 'src/pages/Publishers';

export const ROUTES = {
  ROOT: '/',
  GAMES: '/games',
  GENRES: '/genres',
  TAGS: '/tags',
  PUBLISHERS: '/publishers',
};

const Routers: React.FC = () => {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path={`${ROUTES.GAMES}/:id`} element={<GameDetails />} />
      <Route path={`${ROUTES.GAMES}`} element={<GameList />} />
      <Route path={`${ROUTES.GENRES}`} element={<Genres />} />
      <Route path={`${ROUTES.TAGS}`} element={<Tags />} />
      <Route path={`${ROUTES.PUBLISHERS}`} element={<Publishers />} />
      <Route path={`${ROUTES.ROOT}`} element={<Home />} />
    </Routes>
  );
};

export default Routers;
