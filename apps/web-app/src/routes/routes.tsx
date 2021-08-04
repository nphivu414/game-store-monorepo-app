import * as React from 'react';
import {
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { animated, useTransition } from 'react-spring';

import Home from 'src/pages/Home';
import GameDetails from 'src/pages/GameDetails';

const Routes: React.FC = () => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: () => ({ opacity: 0 }),
    enter: () => ({ opacity: 1 }),
    leave: () => ({ opacity: 0, position: 'absolute', display: 'none' }),
    trail: 200,
  })

  return transitions((styles, location) => (
    <animated.div style={styles}>
      <Switch location={location}>
        <Route path="/games/:id">
          <GameDetails />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </animated.div>
  ))
  
}

export default Routes;
