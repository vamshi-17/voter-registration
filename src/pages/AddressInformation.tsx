import React from 'react';
import { useFormContext } from 'react-hook-form';
import { TextField, Button, Grid, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SectionCard from '../components/SectionCard';
import Breadcrumbs from '../components/Breadcrumbs';
import { VoterFormData } from '../types';
import { stateList } from '../constants/states';

const AddressInformation: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useFormContext<VoterFormData>();

  const onSubmit = (data: VoterFormData) => {
    navigate('/voting-details');
  };

  return (
    <SectionCard>
      <Breadcrumbs steps={['Voter Info', 'Address Information', 'Voting Details', 'Review']} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('streetNumber', {
                required: 'Street Number is required',
                pattern: {
                  value: /^\d+$/,
                  message: 'Street Number must be a number',
                },
              })}
              label="Street Number"
              fullWidth
              error={!!errors.streetNumber}
              helperText={errors.streetNumber?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('streetName', { required: 'Street Name is required' })}
              label="Street Name"
              fullWidth
              error={!!errors.streetName}
              helperText={errors.streetName?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register('addressDetail')}
              label="Address Detail"
              fullWidth
              error={!!errors.addressDetail}
              helperText={errors.addressDetail?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('city', { required: 'City is required' })}
              label="City"
              fullWidth
              error={!!errors.city}
              helperText={errors.city?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('state', { required: 'State is required' })}
              label="State"
              select
              fullWidth
              error={!!errors.state}
              helperText={errors.state?.message}
            >
              {stateList.map((state) => (
                <MenuItem key={state.value} value={state.value}>
                  {state.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('zipCode', {
                required: 'Zip Code is required',
                pattern: {
                  value: /^\d{5}$/,
                  message: 'Zip Code must be a 5-digit number',
                },
              })}
              label="Zip Code"
              fullWidth
              error={!!errors.zipCode}
              helperText={errors.zipCode?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="secondary" onClick={() => navigate('/')}>
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

export default AddressInformation;
