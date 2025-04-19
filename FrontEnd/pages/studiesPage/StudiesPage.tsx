import React from 'react';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import DashboardLayout from './StudiesPageLayout';
const StudiesPage = () => {
    return (
        <>
        <ResponsiveAppBar/>
        <DashboardLayout/>
            <h1>StudiesPage</h1>
        </>
    );
};
export default StudiesPage;