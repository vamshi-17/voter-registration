import React from 'react';
import { useFormContext } from 'react-hook-form';
import { TextField, Button, Grid, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SectionCard from '../components/SectionCard';
import Breadcrumbs from '../components/Breadcrumbs';
import { VoterFormData } from '../types';

const partyList = [
  { value: 'Democratic', label: 'Democratic' },
  { value: 'Republican', label: 'Republican' },
  { value: 'Independent', label: 'Independent' },
  { value: 'Libertarian', label: 'Libertarian' },
  { value: 'Green', label: 'Green' },
  // We can add more parties as needed
];

const VotingDetails: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useFormContext<VoterFormData>();

  const onSubmit = (data: VoterFormData) => {
    navigate('/review-screen');
  };
  
  const partySelected = watch('party')

  return (
    <SectionCard>
      <Breadcrumbs steps={['Voter Info', 'Address Information', 'Voting Details', 'Review']} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('party', { required: 'Party is required' })}
              label="Party"
              select
              fullWidth
              error={!!errors.party}
              helperText={errors.party?.message}
            >
              {partyList.map((party) => (
                <MenuItem key={party.value} value={party.value}>
                  {party.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address',
                },
              })}
              label="Email"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('phoneNumber', {
                required: 'Phone Number is required',
                pattern: {
                  value: /^\d{10}$/,
                  message: 'Phone Number must be a 10-digit number',
                },
              })}
              label="Phone Number"
              fullWidth
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="secondary" onClick={() => navigate('/address-information')}>
              Back
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
    </SectionCard>
  );
};

export default VotingDetails;
