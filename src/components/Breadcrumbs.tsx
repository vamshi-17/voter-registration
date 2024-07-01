import React from 'react';
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Breadcrumbs: React.FC<{ steps: string[] }> = ({ steps }) => {
  const location = useLocation();
  const currentStepIndex = steps.findIndex(step => location.pathname.includes(step.toLowerCase().replace(' ', '-')));

  return (
    <MUIBreadcrumbs>
      {steps.map((step, index) => {
        const path = step === 'Voter Info' ? '/' : `/${step.toLowerCase().replace(' ', '-')}`;
        return index <= currentStepIndex ? (
          <Link
            component={RouterLink}
            to={path}
            key={step}
          >
            {step}
          </Link>
        ) : (
          <Typography color="textPrimary" key={step}>
            {step}
          </Typography>
        )
      })}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
