import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/tecnologia'>Tecnología</Link>
          </li>
          <li>
            <Link to='/politica'>Política</Link>
          </li>
          <li>
            <Link to='/deportes'>Deportes</Link>
          </li>
          <li>
            <Link to='/diseno'>Diseño</Link>
          </li>
          <li>
            <Link to='/internacionales'>Internacionales</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
