import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {

    //State variables
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');

    //Handles the submit action of the form
    const handleSubmit = (e) => {
        e.preventDefault();
        const result = validateFields();

        if(!result[0]){ //Print error if returns false
            setError(result[1]);
            return;
        }
        setError('');

        //Generating object to store to localstorage
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }

        //Storing data to localstorage for persistence
        localStorage.setItem('user', JSON.stringify(userData));
    }

    //Validation of fields beforing data gets stored
    const validateFields = () => {
        if(firstName === '' 
            || lastName === ''
            || email === ''
            || password === ''
            || repeatPassword === ''){
                return [false, 'All fields are mandatory!'];
        }

        if(password.length < 6){
            return [false, 'Password must be 6 characters in length!'];
        }

        if(password !== repeatPassword){
            return [false, 'Password and repeat password fields does not match!'];
        }

        return [true, ''];
    }

    return(
        <div className='container'>
            <span style={{
                fontSize: '25px', fontWeight: 'bold', marginTop: '10px'
            }}>Signup</span>
            <span style={{
                marginTop: '10px',
                color: 'red',
                fontSize: '15px',
                fontStyle: 'italic'
            }}>{error}</span>
            <form className='form' onSubmit={handleSubmit}>
                <table>
                    <tbody>
                    <tr>
                        <td><label>First name</label></td>
                        <td><input 
                                className='input' 
                                type='text' 
                                placeholder='Enter your first name'
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}></input></td>
                    </tr>
                    <tr>
                        <td><label>Last name</label></td>
                        <td><input 
                                className='input' 
                                type='text' 
                                placeholder='Enter your last name'
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}></input></td>
                    </tr>
                    <tr>
                        <td><label>Email</label></td>
                        <td><input 
                                className='input' 
                                type='email' 
                                placeholder='Enter your email address'
                                value={email}
                                onChange={e => setEmail(e.target.value)}></input></td>
                    </tr>
                    <tr>
                        <td><label>Password</label></td>
                        <td><input 
                                className='input' 
                                type='password' 
                                placeholder='Enter your password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}></input></td>
                    </tr>
                    <tr>
                        <td><label>Repeat password</label></td>
                        <td><input 
                                className='input' 
                                type='password' 
                                placeholder='Repeat your password'
                                value={repeatPassword}
                                onChange={e => setRepeatPassword(e.target.value)}></input></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><button style={{
                            width: '150px',
                            backgroundColor: 'green',
                            color: 'white',
                            padding: '7px'}}
                            type='submit'>Signup</button></td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default Signup;