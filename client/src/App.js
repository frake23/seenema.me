import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import MainPage from "./pages/MainPage/MainPage";
import RoomCreator from './components/RoomCreator';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <RoomCreator/>
        </Route>
        <Route path='/*'>
          <MainPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
