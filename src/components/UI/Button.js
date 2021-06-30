import React from 'react';
import styles from './Button.module.css';

const Button = props => {
    return (
        <button className={styles.button} type={props.submit}>{props.buttonText}</button>
    )
};

export default Button;