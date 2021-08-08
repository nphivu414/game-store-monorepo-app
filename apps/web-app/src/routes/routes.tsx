import * as React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';

import Home from 'src/pages/Home';
import GameDetails from 'src/pages/GameDetails';
import GameList from 'src/pages/GameList';

export const ROUTES = {
  ROOT: '/',
  GAMES: '/games',
};

const Routes: React.FC = () => {
  const location = useLocation();
  const transitions = useTransition(location, {
    initial: () => ({ height: '100%' }),
    from: () => ({ opacity: 0 }),
    enter: () => ({ opacity: 1 }),
    leave: () => ({ opacity: 0, position: 'absolute', display: 'none' }),
    trail: 200,
  });

  return transitions((styles, location) => (
    <animated.div style={styles}>
      <Switch location={location}>
        <Route path={`${ROUTES.GAMES}/:id`}>
          <GameDetails />
        </Route>
        <Route path={`${ROUTES.GAMES}`}>
          <GameList />
        </Route>
        <Route path={`${ROUTES.ROOT}`}>
          <Home />
        </Route>
      </Switch>
    </animated.div>
  ));
};

export default Routes;
