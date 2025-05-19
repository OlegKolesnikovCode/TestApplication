import * as React from 'react';
import { createTheme, styled } from '@mui/material/styles';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid';

import SiteFiles from './SiteFiles'; 
import ProtocolFiles from './files/ProtocolFiles'; 
import EmployeesFiles from './files/EmployeesFiles'; 
import RegulatoryFiles from './files/RegulatoryFiles';

RegulatoryFiles
const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'regulatory', // Changed to lowercase for consistency in routing
    title: 'Regulatory',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'protocols', // Changed to lowercase for routing
        title: 'Protocols',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'employees', // Changed to lowercase
        title: 'Employees',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'site', // Changed to lowercase
        title: 'Site',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: <LayersIcon />,
  },
];

const demoTheme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);
 
  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function DashboardLayoutBasic(props: any) {
  const { window } = props;
  const router = useDemoRouter('/regulatory'); // Set an initial path
  const demoWindow = window ? window() : undefined;

  let content;

  if (router.pathname === '/regulatory') {
    content = <RegulatoryFiles />;
  } 
  else if (router.pathname === '/regulatory/site') {
    content = <SiteFiles />;
  } 
  else if  (router.pathname === '/regulatory/protocols') {
    content = <ProtocolFiles />;
  } 
  else if (router.pathname === '/regulatory/employees') {
    content = <EmployeesFiles />;
  } 

  
  
  
  else {
    content = (
      <Grid container spacing={1}>
        <Grid size={5} />
        <Grid size={12}>
          <Skeleton height={14} />
        </Grid>
        <Grid size={12}>
          <Skeleton height={14} />
        </Grid>
        <Grid size={4}>
          <Skeleton height={100} />
        </Grid>
        <Grid size={8}>
          <Skeleton height={100} />
        </Grid>

        <Grid size={12}>
          <Skeleton height={150} />
        </Grid>
        <Grid size={12}>
          <Skeleton height={14} />
        </Grid>

        <Grid size={3}>
          <Skeleton height={100} />
        </Grid>
        <Grid size={3}>
          <Skeleton height={100} />
        </Grid>
        <Grid size={3}>
          <Skeleton height={100} />
        </Grid>
        <Grid size={3}>
          <Skeleton height={100} />
        </Grid>
      </Grid>
    );
  }

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer>
          {content}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
} 