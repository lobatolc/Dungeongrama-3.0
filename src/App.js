import './App.css';
import Routes from './controllers/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import GlobalStyle from './global.Styles';
function App() {
  return (
    <>
        <Router>
          <Routes />
        </Router>
      <GlobalStyle/>
      <GlobalStyle />
    </>
  );
}

export default App;
