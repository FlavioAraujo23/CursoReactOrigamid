import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const NavBar = () => {
  return (
    <>
      <nav className={styles.header}>
        <NavLink className={styles.link} to="/" end>Produto</NavLink>
        <NavLink className={styles.link} to="contato">Contato</NavLink>
      </nav>
    </>
  )
}

export default NavBar