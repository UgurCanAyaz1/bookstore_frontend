import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

function AdminBookTable() {
    const user = useSelector((state) => state.user);
    const authToken = user.authToken;

    // use state for storing db user information after sending request to server
    const [UserData, setUserData] = useState([]);

    // use state for adding new user. Entered data field values are stored in use state.
    const [newUser, setNewUser] = useState({
        id: '',
        firstName: '',
        lastName: '',
        userName: '',
        emailAddress: '',
        passwordHash:'',
        role: '',
    });

    // UseEffect for listing all users that are in database
    useEffect(() => {
        getAllUsers();
    }, []);

    // Function to be executed with useEffect for listing all users
    // Received information is stored at newUser useState
    const getAllUsers = async () => {
        try {
            let response = await axios.get('http://localhost:5234/api/user/GetAll');
            setUserData(response.data);
        } catch (error) {
            console.log('Get All Users Error', error);
        }
    };

    const handleInputChange = (userId, field, value) => {
        setUserData((prevData) => {
            return prevData.map((b) => {
                if (b.id === userId) {
                    return { ...b, [field]: value };
                } else {
                    return b;
                }
            });
        });
    };

    const handleNewUserChange = (field, value) => {
        setNewUser((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    // Function that sends put request to server for updating user information
    const handleSaveChanges = async (user) => {
        try {
            await axios.put(`http://localhost:5234/api/user/UpdateUser/`, user, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            });
            alert('Changes saved successfully');
        } catch (error) {
            console.log('Save Changes Error', error);
        }
    };

    // Function that sends put request to server for adding new user information
    const handleAddNewUser = async () => {
        try {
            await axios.put(
                `http://localhost:5234/api/user/AddUser`,
                {
                    id: newUser.id,
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    userName: newUser.userName,
                    emailAddress: newUser.emailAddress,
                    passwordHash: newUser.passwordHash,
                    role: newUser.role,
                },
                {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            alert('New user added successfully');
            setNewUser({
                id: '',
                firstName: '',
                lastName: '',
                userName: '',
                emailAddress: '',
                passwordHash: '',
                role: '',
            });
            getAllUsers(); // Refresh the user list
        } catch (error) {
            console.log('Add New user Error', error);
        }
    };

    // Function that sends delete request to server for deleting user record
    const handleDeleteUser = async (userId) => {
        try {
            await axios.delete(`http://localhost:5234/api/user/DeleteUser/${userId}`, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            });
            alert('user deleted successfully');
            getAllUsers(); // Refresh the user list
        } catch (error) {
            console.log('Delete user Error', error);
        }
    };

    return (
        <div className='' style={{ display: 'flex', width:"90vw" }}>
            <div className=' justify-center'>
                <div className='product-table w-full'>
                    <table className='w-full'>
                        <thead>
                            <tr className='mt-10 mb-10 w-full' style={{ backgroundColor: 'orange' }}>
                                <th className='w-full' style={{ border: '1px solid black', textAlign: 'center' }}>
                                    Please Make Corresponding Adjustments to Users and then Either Save or Delete the Record
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div className='product-table'>
                    <table className=' w-full' cellSpacing={0}>
                        <thead>
                            <tr className='heading mt-10'>
                                <th style={{ border: '1px solid black' }}>Id</th>
                                <th style={{ border: '1px solid black' }}>First Name</th>
                                <th style={{ border: '1px solid black' }}>Last Name</th>
                                <th style={{ border: '1px solid black' }}>User Name</th>
                                <th style={{ border: '1px solid black' }}>E-mail Address</th>
                                <th style={{ border: '1px solid black' }}>Password/Password Hash</th>
                                <th style={{ border: '1px solid black' }}>Role</th>
                                <th style={{ border: '1px solid black' }}>Save Changes/Add User</th>
                                <th style={{ border: '1px solid black' }}>Delete user</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='data' style={{ border: '1px solid black', borderRadius: '10px', textAlignLast: 'center' }}>
                                <td style={{ border: '1px solid black' }}>
                                    <input
                                        type='text'
                                        value={newUser.id}
                                        onChange={(e) => handleNewUserChange('id', e.target.value)}
                                        placeholder='New ID'
                                        style={{ width: '3.5rem' }}
                                    />
                                </td>
                                <td style={{ border: '1px solid black' }}>
                                    <input
                                        type='text'
                                        value={newUser.firstName}
                                        onChange={(e) => handleNewUserChange('firstName', e.target.value)}
                                        placeholder='First Name'
                                        style={{ width: '30.5rem' }}
                                    />
                                </td>
                                <td style={{ border: '1px solid black' }}>
                                    <input
                                        type='text'
                                        value={newUser.lastName}
                                        onChange={(e) => handleNewUserChange('lastName', e.target.value)}
                                        placeholder='Last Name'
                                        style={{ width: '10.5rem' }}
                                    />
                                </td>
                                <td style={{ border: '1px solid black' }}>
                                    <input
                                        type='text'
                                        value={newUser.userName}
                                        onChange={(e) => handleNewUserChange('userName', e.target.value)}
                                        placeholder='User Name'
                                        style={{ width: '10.5rem' }}
                                    />
                                </td>
                                <td style={{ border: '1px solid black' }}>
                                    <input
                                        type='text'
                                        value={newUser.emailAddress}
                                        onChange={(e) => handleNewUserChange('emailAddress', e.target.value)}
                                        placeholder='Email'
                                        style={{ width: '10.5rem' }}
                                    />
                                </td>
                                <td style={{ border: '1px solid black' }}>
                                    <input
                                        type='text'
                                        value={newUser.passwordHash}
                                        onChange={(e) => handleNewUserChange('passwordHash', e.target.value)}
                                        placeholder='Password Hash'
                                        style={{ width: '10.5rem' }}
                                    />
                                </td>
                                <td style={{ border: '1px solid black' }}>
                                    <input
                                        type='text'
                                        value={newUser.role}
                                        onChange={(e) => handleNewUserChange('role', e.target.value)}
                                        placeholder='Role'
                                        style={{ width: '3.5rem' }}
                                    />
                                </td>

                                <td style={{ border: '1px solid black' }}>
                                    <button onClick={handleAddNewUser}>Add user</button>
                                </td>
                            </tr>
                            {UserData.map((user, key) => (
                                <tr className='data' key={key} style={{ border: '1px solid black', borderRadius: '10px', textAlignLast: 'center' }}>
                                    <td style={{ border: '1px solid black' }}>{user.id}</td>
                                    <td style={{ border: '1px solid black' }}>
                                        <input
                                            type='text'
                                            value={user.firstName}
                                            onChange={(e) => handleInputChange(user.id, 'firstName', e.target.value)}
                                            style={{ width: '30.5rem' }}
                                        />
                                    </td>
                                    <td style={{ border: '1px solid black' }}>
                                        <input
                                            type='text'
                                            value={user.lastName}
                                            onChange={(e) => handleInputChange(user.id, 'lastName', e.target.value)}
                                            style={{ width: '10.5rem' }}
                                        />
                                    </td>
                                    <td style={{ border: '1px solid black' }}>
                                        <input
                                            type='text'
                                            value={user.userName}
                                            onChange={(e) => handleInputChange(user.id, 'userName', e.target.value)}
                                            style={{ width: '10.5rem' }}
                                        />
                                    </td>
                                    <td style={{ border: '1px solid black' }}>
                                        <input
                                            type='text'
                                            value={user.emailAddress}
                                            onChange={(e) => handleInputChange(user.id, 'emailAddress', e.target.value)}
                                            style={{ width: '10.5rem' }}
                                        />
                                    </td>
                                    <td style={{ border: '1px solid black' }}>
                                        <input
                                            type='text'
                                            value={user.passwordHash}
                                            onChange={(e) => handleInputChange(user.id, 'Password Hash', e.target.value)}
                                            style={{ width: '10.5rem' }}
                                        />
                                    </td>
                                    <td style={{ border: '1px solid black' }}>
                                        <input
                                            type='text'
                                            value={user.role}
                                            onChange={(e) => handleInputChange(user.id, 'role', e.target.value)}
                                            style={{ width: '3.5rem' }}
                                        />
                                    </td>

                                    <td style={{ border: '1px solid black' }}>
                                        <button onClick={() => handleSaveChanges(user)}>Save Changes</button>
                                    </td>
                                    <td style={{ border: '1px solid black' }}>
                                        <button onClick={() => handleDeleteUser(user.id)}>Delete user</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminBookTable;
