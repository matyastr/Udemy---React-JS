/*jshint esversion: 6 */

import React from 'react';
import classes from '../styles/AppHeader.module.css';

const AppHeader = () => {

    return (
        <header className={classes.AppHeader}>
            <img className={classes.AmazonImg} src='https://purepng.com/public/uploads/medium/purepng.com-amazoncom-logologobrand-logoiconslogos-251519938642ecnez.png'  alt="Amazon Logo" />
        </header>
    );
}

export default AppHeader;