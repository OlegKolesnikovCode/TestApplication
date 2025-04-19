import React from 'react';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import DashboardLayout from './RegulatorPageLayout';
const RegulatorPage = () => {
    return (
        <>
        <ResponsiveAppBar/>
        <DashboardLayout/>
            <h1>RegulatorPage</h1>
        </>
    );
};
export default RegulatorPage;