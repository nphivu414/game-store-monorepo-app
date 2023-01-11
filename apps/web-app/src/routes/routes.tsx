import * as React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import GameDetails from '../pages/GameDetails';
import GameList from '../pages/GameList';
import Genres from '../pages/Genres';
import Tags from '../pages/Tags';
import Publishers from '../pages/Publishers';
import { ROUTES } from '@root/ui-web';

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
