import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddUser.module.css';

const AddUser = props => {
    const [ enteredName, setEnteredName ] = useState('');
    const [ enteredAge, setEnteredAge ] = useState('');
    const [ isValid, setIsValid ] = useState(true);

    const addUserHandler = event => {
        event.preventDefault();
    }

    console.log('enteredName', enteredName);
    console.log('age', enteredAge)
        return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type='number'/>
                <Button type="submit" buttonText='Add User'/>
            </form>
        </Card>
    )
};

export default AddUser;