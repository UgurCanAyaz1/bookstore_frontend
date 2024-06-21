import React, { useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Admin from '../components/Admin';

function AdminPage() {
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const authToken = user.authToken;

    const isAdmin = () => {
        if (!authToken) return false;
        try {
            const decodedToken = jwtDecode(authToken);
            return decodedToken.Role === "admin";
        } catch (error) {
            console.error('Invalid token', error);
            return false;
        }
    };

    const role = isAdmin();

    useEffect(() => {
        if (!role) {
            navigate("/Unauthorized");
        }
    }, [role, navigate]);

    return (
        role ? (<Admin/>) : null
    );
}

export default AdminPage;
