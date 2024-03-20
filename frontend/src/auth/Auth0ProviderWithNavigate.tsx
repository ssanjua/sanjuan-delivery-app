import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
}

const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  if( !domain || !clientId || !redirectUri || !audience ) {
    throw new Error("no se pudo inicializar auth")
  }

  const onredirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || "/auth-callback")
  };

  return (
    <Auth0Provider 
    domain={domain} 
    clientId={clientId} 
    authorizationParams={{
        redirect_uri: redirectUri,
        audience,
    }}
        onredirectCallback = {onredirectCallback}
    >  
      { children }
    </Auth0Provider>
  );
}

export default Auth0ProviderWithNavigate;