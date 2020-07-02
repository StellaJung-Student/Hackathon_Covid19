import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import BottomNav from './components/BottomNav/BottomNav';
import ReservationDetail from './pages/ReservationDetail';
import ServicesDetail from './pages/ServicesDetail';

function App() {
  return (
    <div className='container'>
      <Switch>
        <Route exact path='/reservation' component={Reservation} />
        <Route
          exact
          path='/reservation/:id/reserve'
          component={ReservationDetail}
        />
        <Route
          exact
          path='/reservation/:id/service'
          component={ServicesDetail}
        />
        <Route
          exact
          path='/reservation/:id/evaluation'
          component={ReservationDetail}
        />
        <Route
          exact
          path='/reservation/:id/details'
          component={ServicesDetail}
        />
        <Route exact path='/' component={Home} />
        <Route exact path='/services' component={ServicesDetail} />
      </Switch>
      <BottomNav />
    </div>
  );
}

export default App;
