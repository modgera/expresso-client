import * as React from 'react';
import { Link } from 'react-router-dom';
import { ReactChildren } from '../../types/props';
import './Layout.scss';

const Layout: React.FC = ({ children }: ReactChildren) => (
  <>
    <header className="header">
      <span>
        <img src="" className="logo" alt="Logo" />
        Expresso Client
      </span>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main id="app">
      {children}
    </main>
    <footer className="footer">
      <span>© modgera</span>
      <a href="https://github.com/modgera/route-builder" target="blank" className="footer__github-logo">
        <img src="" className="github-logo" alt="GitHub Logo" />
      </a>
      <a href="mailto:modgera@gmail.com" target="blank" rel="noopener noreferrer" aria-label="email">Contact me</a>
    </footer>
  </>
);

export default Layout;
