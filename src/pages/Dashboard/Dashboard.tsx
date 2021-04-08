import { useState, useCallback } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IonContent, IonGrid, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel } from '@ionic/react';

import { ROUTES } from '../../routes';
import './Dashboard.css';

interface DashboardProps extends RouteComponentProps {}

export const Dashboard = ({ history }: DashboardProps) => {
  return (
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonLabel>Last routine</IonLabel>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonList>
              <IonItem>
                <IonLabel>Pokémon Yellow</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Mega Man X</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>The Legend of Zelda</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Pac-Man</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Super Mario World</IonLabel>
              </IonItem>
            </IonList>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default Dashboard;
