import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SectionCard from '../components/SectionCard';
import Breadcrumbs from '../components/Breadcrumbs';
import { VoterFormData } from '../types';

const ReviewScreen: React.FC = () => {
  const navigate = useNavigate();
  const { getValues, reset } = useFormContext<VoterFormData>();
  const formData = getValues();

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);

      // Reset the form after submission
      reset();
      navigate('/');
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <SectionCard>
      <Breadcrumbs steps={['Voter Info', 'Address Information', 'Voting Details', 'Review']} />
      <Typography variant="h4" gutterBottom>Review Your Information</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(formData).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</TableCell>
                <TableCell>{String(value)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6}>
          <Button variant="contained" color="secondary" onClick={() => navigate('/voting-details')}>
            Back
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </SectionCard>
  );
};

export default ReviewScreen;
