import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = props => {
    const [ enteredName, setEnteredName ] = useState('');
    const [ enteredAge, setEnteredAge ] = useState('');
    const [error, setError] = useState();

    const addUserHandler = event => {
        event.preventDefault();
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'invalid Age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }

        props.onAddUser(enteredName, enteredAge);
        setEnteredName('');
        setEnteredAge('');
    }

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    }

    const ageInputChangeHandler = event => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }

        return (
        <>
            {error && (
                <ErrorModal
                    title={error.title} 
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}

            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username" 
                        onChange={nameInputChangeHandler} 
                        value={enteredName}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input 
                        id="age" 
                        type='number' 
                        onChange={ageInputChangeHandler} 
                        value={enteredAge}
                    />
                    <Button type="submit"> Add user </Button>
                </form>
            </Card>
        </>
    )
};

export default AddUser;