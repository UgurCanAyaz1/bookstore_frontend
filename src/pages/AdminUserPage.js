import React, { useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AdminUserTable from '../components/AdminUserTable';
import AdminSidebar from '../components/AdminSidebar';

function AdminUserPage() {
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
        role ? (
        <div style={{display: "flex"}}>
            <AdminSidebar/>
            <AdminUserTable/>
        </div>
    ) : null
    );
}

export default AdminUserPage;
