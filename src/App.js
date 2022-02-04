import logo from './logo.svg';
import './App.css';
import Routes from './controllers/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './global.Styles';
function App() {
  return (
    <>
        <Router>
          <Routes />
        </Router>
      <GlobalStyle/>
    </>
  );
}

export default App;
