import React, {useEffect, useState} from 'react';
import './Profile.css';

const Profile = () => {
    //State variables
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    let userData = {};

    useEffect(() => {
        userData = JSON.parse(localStorage.getItem('user'));
        setFirstName(userData.firstName);
        setLastName(userData.lastName);
        setEmail(userData.email);
        setPassword(userData.password);
    }, []);

    //Prevents form from submitting and rerendering
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    //Changing readOnly property
    const toggleReadOnly = (flag) => {
        document.getElementById('firstName').readOnly = flag;
        document.getElementById('lastName').readOnly = flag;
        document.getElementById('email').readOnly = flag;
        document.getElementById('password').readOnly = flag;
    }

    //Handles edit button
    const handleEdit = () => {
        //Changing readOnly property to allow changes to be done
        toggleReadOnly(false);

        //Displays data updated message for 2 seconds
        setError('In edit mode!');
        setTimeout(() => {
            setError('');
        },2000);
    }

    //Handles update button
    const handleUpdate = () => {
        const result = validateFields();

        //Does not process if validation doesn't pass
        if(!result[0]){
            setError(result[1]);
            return;
        }
        //Change to readOnly state
        toggleReadOnly(true);

        //Displays data updated message for 2 seconds
        setError('Data updated! Exited from edit mode!');
        setTimeout(() => {
            setError('');
        },2000);

        //Creating an object to store to localstorage
        const newData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        //Update the localstorage with new data
        localStorage.setItem('user', JSON.stringify(newData));
    }

    //Validation of fields beforing data gets stored
    const validateFields = () => {
        if(firstName === '' 
            || lastName === ''
            || email === ''
            || password === ''){
                return [false, 'All fields are mandatory!'];
        }

        if(password.length < 6){
            return [false, 'Password must be 6 characters in length!'];
        }

        return [true, ''];
    }

    return(
        <div className='container'>
            <span style={{
                fontSize: '25px', fontWeight: 'bold', marginTop: '10px'
            }}>Profile</span>
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
                                id='firstName'
                                className='input'
                                readOnly
                                type='text' 
                                placeholder='Enter your first name'
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}></input></td>
                    </tr>
                    <tr>
                        <td><label>Last name</label></td>
                        <td><input 
                                id='lastName'
                                className='input' 
                                type='text' 
                                readOnly
                                placeholder='Enter your last name'
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}></input></td>
                    </tr>
                    <tr>
                        <td><label>Email</label></td>
                        <td><input 
                                id='email'
                                className='input' 
                                type='email' 
                                readOnly
                                placeholder='Enter your email address'
                                value={email}
                                onChange={e => setEmail(e.target.value)}></input></td>
                    </tr>
                    <tr>
                        <td><label>Password</label></td>
                        <td><input 
                                id='password'
                                className='input' 
                                type='password' 
                                readOnly
                                placeholder='Enter your password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}></input></td>
                    </tr>
                    <tr>
                        
                        <td></td>
                        <td>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <button style={{
                                width: '100px',
                                backgroundColor: 'skyblue',
                                color: 'white',
                                padding: '7px'}}
                                onClick={handleEdit}>Edit</button>
                                <button style={{
                                width: '100px',
                                backgroundColor: 'green',
                                color: 'white',
                                padding: '7px',
                                marginLeft: '10px'}}
                                onClick={handleUpdate}>Update</button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default Profile;