import React, { useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';

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
        role ? (
            <div style={{ display: "flex", height: "100vh" }}>
                <AdminSidebar />
                <div className='product-table w-full h-full' style={{ height: "100%" }}>
                    <table className='w-full'>
                        <thead>
                            <tr className="mt-10 mb-10 w-full" style={{ backgroundColor: 'orange' }}>
                                <th className='w-full' style={{ border: '1px solid black', textAlign: 'center' }}>
                                    Welcome to Admin Page, Please Use Sidebar on the Left to do User or Book Specific Actions
                                </th>
                            </tr>
                        </thead>
                    </table>
                    <iframe
                        title='title' 
                        style={{ width: "100%", height: "100%" }} 
                        src="https://giphy.com/embed/llNyEwZQOJj6tZhhIB"
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
            </div>
        ) : null
    );
}

export default AdminPage;
