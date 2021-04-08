import { useState, useCallback } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IonContent, IonGrid, IonRow, IonCol, IonButton, IonInput, IonItem } from '@ionic/react';

import CenteredContainer from '../../components/CenteredContainer/CenteredContainer';
import { ROUTES } from '../../routes';
import './Login.css';

interface LoginProps extends RouteComponentProps {}

export const Login = ({ history }: LoginProps) => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const doLogin = useCallback(() => {
    console.log(ROUTES.DASHBOARD.path);
    history.push(ROUTES.DASHBOARD.path, { username });
  }, [username, history]);

  return (
    <IonContent forceOverscroll={true}>
      <CenteredContainer>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem lines="none" class="rounded">
                <IonInput type="email" placeholder="Email" value={username} onIonChange={(e) => setUsername(e.detail.value!)} />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem lines="none" class="rounded">
                <IonInput type="password" placeholder="Password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton color="primary" type="submit" class="submit ion-margin-top" expand="block" onClick={doLogin}>
                Login
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </CenteredContainer>
    </IonContent>
  );
};

export default Login;
