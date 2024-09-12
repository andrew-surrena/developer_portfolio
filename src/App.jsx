import './App.css'
// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Header';
import Footer from './components/Footer';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL | the Nav is constant (you could add a footer element as well, that would be static, as in for the homework)
  return (
    <>
      < Nav />
      < Outlet />
      < Footer />
    </>
  );
}

export default App;
