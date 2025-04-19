import React from 'react';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import DashboardLayout from './SchedulePageLayout';
const SchedulePage = () => {
    return (
        <>
        <ResponsiveAppBar/>
        <DashboardLayout/>
            <h1>SchedulePage</h1>
        </>
    );
};
export default SchedulePage;