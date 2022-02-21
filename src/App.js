import './App.css';
import Routes from './controllers/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import GlobalStyle from './global.Styles';
import NotifyProvider from './contexts/notifyContext';
function App() {
  return (
    <>
        <NotifyProvider> 
          <Router>
            <Routes />
          </Router>
        </NotifyProvider>
      <GlobalStyle/>
      <GlobalStyle />
    </>
  );
}

export default App;
