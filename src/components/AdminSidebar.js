import React from 'react';
import "../static/css/sidebar.css";

function AdminSidebar() {
    return (
        <>
            <div className="containerSidebar text-center">
                <a className="active1 ">Admin Sidebar</a>
                <a href="/">Click to Return to Home Page</a>
                <a href="/admin/book">Book Operations</a>
                <a href="/admin/user">User Operations</a>
            </div>
        </>
    );
}

export default AdminSidebar;
