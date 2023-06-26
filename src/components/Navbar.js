import React from 'react';

//Styles
import styles from './Navbar.module.css'

const Navbar = ({logoutHandler}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.name}>
                Botogram
            </h2>
            <div className={styles.logout} onClick={logoutHandler}>
                Logout
            </div>
        </div>
    );
};

export default Navbar;