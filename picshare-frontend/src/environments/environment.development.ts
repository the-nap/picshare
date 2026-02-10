export const environment = {
  production: false,
  auth0: {
    domain: 'pic-share.eu.auth0.com',
    clientId: 'YBVD7lwWqhQa3AtpsOmodZDb13SFAMof',
    authorizationParams: {
      audience: 'https://amoeba-immense-macaw.ngrok-free.app/api',
      redirect_uri: `http://localhost/4200`,
    },
    errorPath: '/callback',
  },
  api: {
    serverUrl: 'https://amoeba-immense-macaw.ngrok-free.app/api',
  },
};
