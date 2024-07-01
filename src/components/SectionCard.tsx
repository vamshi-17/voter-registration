import React from 'react';
import { Card, CardContent } from '@mui/material';

const SectionCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Card>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default SectionCard;
