import * as React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from 'src/pages/Home';
import GameDetails from 'src/pages/GameDetails';
import GameList from 'src/pages/GameList';
import Genres from 'src/pages/Genres';
import Tags from 'src/pages/Tags';

export const ROUTES = {
  ROOT: '/',
  GAMES: '/games',
  GENRES: '/genres',
  TAGS: '/tags',
};

const Routes: React.FC = () => {
  const location = useLocation();
  return (
    <Switch location={location}>
      <Route path={`${ROUTES.GAMES}/:id`}>
        <GameDetails />
      </Route>
      <Route path={`${ROUTES.GAMES}`}>
        <GameList />
      </Route>
      <Route path={`${ROUTES.GENRES}`}>
        <Genres />
      </Route>
      <Route path={`${ROUTES.TAGS}`}>
        <Tags />
      </Route>
      <Route path={`${ROUTES.ROOT}`}>
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
