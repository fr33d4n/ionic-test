import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';

import { RoutingProps } from '../../common/types';
import Noop from '../Noop/Noop';

export const Routing = ({ pages }: RoutingProps) => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          {pages.map(({ name, path, redirectTo = '', Component = Noop }) =>
            redirectTo ? <Redirect to={redirectTo} key={name} /> : <Route exact path={path} key={name} component={Component} />
          )}
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          {pages
            .filter((p) => p.showOnTabs)
            .map(({ name, path, icon = '', label = '' }) => (
              <IonTabButton tab={name} href={path} key={name}>
                <IonIcon icon={icon} />
                <IonLabel>{label}</IonLabel>
              </IonTabButton>
            ))}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default Routing;
