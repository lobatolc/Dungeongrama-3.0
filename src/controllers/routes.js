import React, { useContext, useEffect, useState } from "react";
import { Route, Redirect, Switch } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Header from '../components/Header/header';
import Login from '../pages/login/login';
import Stage from '../pages/stage/stage';
import Ranking from '../pages/ranking/ranking';
import Gameplay from "../pages/gameplay/gameplay";

export default function routes(){
    return(
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

            </Switch>
)};

function ValidatedRoute({ Component, privateRoute, ...restProps }) {
    const isValid = true;
    const [routeHTML, setRouteHTML] = useState('');
    useEffect(() => {
      async function CheckRoute() {
        setRouteHTML(<Login />);
        switch (isValid) {
          case null:
          case undefined:
            setRouteHTML(<Login />);
            break;
  
          case false:
            setRouteHTML(<Redirect push to="/login" />);
            break;
  
          case true:
            if (privateRoute) {
              setRouteHTML(
                <ValidatedWithPermissionsRoute
                  component={Component}
                  {...restProps}
                ></ValidatedWithPermissionsRoute>,
              );
            } else {
              setRouteHTML(
                <Route
                  {...restProps}
                  render={(props) => (
                    <div className="pageManager">
                      <Header {...props} />
                      <Component {...props} />
                    </div>
                  )}
                ></Route>,
              );
            }
            break;
          default:
            setRouteHTML(<Login />);
            break;
        }
      }
  
      CheckRoute();
    }, [isValid]);
    return routeHTML;
  }
  
  function ValidatedWithPermissionsRoute({
    component: Component,
    page_name,
    page_group,
    ...restProps
  }) {
    const permissions = true;
    const [routeHTML, setRouteHTML] = useState('');
  
    useEffect(() => {
      async function CheckPermissions() {
        switch (permissions) {
          case null:
          case undefined:
            setRouteHTML(<Login />);
            break;
  
          default:
            setRouteHTML(
              <Route
                {...restProps}
                render={(props) => (
                  <>
                    <div className="pageManager">
                      <Header permissionsLevel={permissions} {...restProps} />
                      <Component
                        page_name={page_name}
                        page_group={page_group}
                        {...restProps}
                      />
                    </div>
                  </>
                )}
              ></Route>,
            );
            break;
        }
      }
  
      CheckPermissions();
    }, [permissions]);
  
    return routeHTML;
  }