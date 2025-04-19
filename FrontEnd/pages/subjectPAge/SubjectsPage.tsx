import React from 'react';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import DashboardLayout from './SubjectsPageLayout';
const SubjectsPage = () => {
    return (
        <>
        <ResponsiveAppBar/>
        <DashboardLayout/>
            <h1>SubjectsPage</h1>
        </>
    );
};
export default SubjectsPage;