import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

const UserProfile = () => {
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetch('localhost/api/subjects/1'); // Example API
            const data = await response.json();
            setUser(data);
        };

        fetchUserData();
    }, [setUser]);

    return (
        <div>
            <h1>User Profile</h1>
            {user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Please log in to see your profile.</p>
            )}
        </div>
    );
};

export default UserProfile;








































/*import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const UserProfile = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>User Profile</h1>
            {user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Please log in to see your profile.</p>
            )}
        </div>
    );
}; 

export default UserProfile; */
