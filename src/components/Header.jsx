    import { Link, useLocation } from 'react-router-dom';
    import Nav from './UI/Navbar';

    // Here we are using object destructuring assignment to pluck off our variables from the props object
    // We assign them to their own variable names
    export default function Header() {
      let location = useLocation();
      console.log(location);
      
      return (
        <header>
          <h1>Andrew Surrena</h1>
        <Nav
          links={[
            <Link key={1} to="/" 
            className={location.pathname === '/' ? 'tabactive' : ''}
            >
              About Me
            </Link>,
            <Link key={2} to="/portfolio" 
            className={location.pathname === '/portfolio' ? 'tabactive' : ''}
            >
              Portfolio
            </Link>,
            <Link key={3} to="/contact" 
            className={location.pathname === '/contact' ? 'tabactive' : ''}
            >
            Contact
          </Link>,
          <Link key={4} to="/resume" 
          className={location.pathname === '/resume' ? 'tabactive' : ''}
          >
            Resume
          </Link>,
          ]}
        />
        </header>
      );
    }

    
 
    