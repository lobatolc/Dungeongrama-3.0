import React, { useContext, useEffect, useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Header from '../components/Header/header';
import Login from '../pages/login/login';
import Stage from '../pages/stage/stage';
import Ranking from '../pages/ranking/ranking';
import Gameplay from '../pages/gameplay/gameplay';
import About from '../pages/about/about';
import NotifyModal from '../components/Notify/notify';
import { useNotifys } from '../contexts/notifyContext';
export default function Routes() {
  const { notifys, setNotifys } = useNotifys();
  return (
    <>
      <NotifyModal {...notifys} />
      <Switch>
        <Route
          path="/"
          page_name="login"
          privateRoute={true}
          exact
          component={Login}
        />
        <ValidatedRoute
          path="/stage"
          page_name="stage"
          privateRoute={true}
          exact
          component={Stage}
        />
        <ValidatedRoute
          path="/ranking"
          page_name="ranking"
          privateRoute={true}
          exact
          component={Ranking}
        />
        <ValidatedRoute
          path="/gameplay"
          page_name="gameplay"
          privateRoute={true}
          exact
          component={Gameplay}
        />
        <ValidatedRoute
          path="/about"
          page_name="about"
          privateRoute={true}
          exact
          component={About}
        />
      </Switch>
    </>
  );
}

function ValidatedRoute({ privateRoute, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <div className="pageManager">
          <Header {...props} />
          <Component {...props} />
        </div>
      )}
    ></Route>
  );
}
