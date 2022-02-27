import './App.css';
import Routes from './controllers/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import GlobalStyle from './global.Styles';
import NotifyProvider from './contexts/notifyContext';
import { UserCredentialProvider } from './contexts/userContext';
function App() {
  return (
    <>
      <UserCredentialProvider>
        <NotifyProvider>
          <Router>
            <Routes />
          </Router>
        </NotifyProvider>
      </UserCredentialProvider>
      <GlobalStyle />
      <GlobalStyle />
    </>
  );
}

export default App;
