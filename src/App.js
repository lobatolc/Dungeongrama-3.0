import './App.css';
import Routes from './controllers/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './global.Styles';
import NotifyProvider from './contexts/notifyContext';
import StageProvider from './contexts/stageContext';
import { UserCredentialProvider } from './contexts/userContext';
function App() {
  return (
    <>
      <UserCredentialProvider>
        <NotifyProvider>
          <StageProvider>
            <Router>
              <Routes />
            </Router>
          </StageProvider>
        </NotifyProvider>
      </UserCredentialProvider>
      <GlobalStyle />
      <GlobalStyle />
    </>
  );
}

export default App;
