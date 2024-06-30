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
        <>
        <div style={{display: "flex"}}>
            <AdminSidebar/>
            <div className='product-table w-full'>
                <table className='w-full'>
                    <thead>
                        <tr className="mt-10 mb-10 w-full" style={{backgroundColor:'orange'}}>
                            <th className='w-full' style={{ border: '1px solid black', textAlign: 'center' }}>
                                Welcome to Admin Page, Please Use Sidebar on the Left to do User or Book Specific Actions
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
        </>

        
    ) : null
    );
}

export default AdminPage;
