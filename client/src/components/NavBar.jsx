
import { useState } from 'react'
import styles from './NavBar.module.css';

function NavBar() {
    const [isActive, setIsActive] = useState(false);
  
    const removeActive = () => {
      setIsActive(false);
    };
  
    return (
      <div className="App">
        <header className="App-header">
          <nav className={`${styles.navbar}`}>
            {/* logo */}
            <a href="#home" className={`${styles.logo}`}>
              MatchMinds{" "}
            </a>
  
            <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
              {/* Barra de búsqueda */}
              <li onClick={removeActive} className={styles.searchBarContainer}>
                <input
                  type="text"
                  placeholder="Search Product..."
                  className={`${styles.searchBar}`}
                />
                <button className={`${styles.searchButton}`}>Buscar</button>
              </li>
              {/* Elementos del menú */}
              <li onClick={removeActive}>
                <a href="#home" className={`${styles.navLink}`}>
                  Card
                </a>
              </li>
              <li onClick={removeActive}>
                <a href="#home" className={`${styles.navLink}`}>
                  Sign Up
                </a>
              </li>
              <li onClick={removeActive}>
                <a href="#home" className={`${styles.navLink}`}>
                  Log In
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
  
  export default NavBar;
  

  