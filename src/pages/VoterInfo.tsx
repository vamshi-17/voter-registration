import React from 'react';
import { useFormContext } from 'react-hook-form';
import { TextField, Button, MenuItem, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SectionCard from '../components/SectionCard';
import Breadcrumbs from '../components/Breadcrumbs';
import { VoterFormData } from '../types';

const VoterInfo: React.FC = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors } } = useFormContext<VoterFormData>();

  const onSubmit = (data: VoterFormData) => {
    const driversLicense = watch('driversLicense');
    const ssn = watch('ssn');

    console.log("Submit clicked....");

    if (!driversLicense && !ssn) {
      alert('Please provide either a Driver’s License or SSN.');
      return;
    }

    navigate('/address-information');
  };

  return (
    <SectionCard>
      <Breadcrumbs steps={['Voter Info', 'Address Information', 'Voting Details', 'Review']} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('firstName', { required: 'First Name is required' })}
              label="First Name"
              fullWidth
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              defaultValue=""
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('lastName', { required: 'Last Name is required' })}
              label="Last Name"
              fullWidth
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              defaultValue=""
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('gender', { required: 'Gender is required' })}
              label="Gender"
              select
              fullWidth
              error={!!errors.gender}
              helperText={errors.gender?.message}
              defaultValue=""
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('dob', { required: 'Date of Birth is required' })}
              label="Date of Birth"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              error={!!errors.dob}
              helperText={errors.dob?.message}
              defaultValue=""
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('driversLicense')}
              label="Driver’s License"
              fullWidth
              error={!!errors.driversLicense}
              helperText={errors.driversLicense?.message}
              defaultValue=""
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('ssn')}
              label="SSN"
              fullWidth
              error={!!errors.ssn}
              helperText={errors.ssn?.message}
              defaultValue=""
            />
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="space-between">
              <Button variant="contained" color="secondary" onClick={() => navigate('/')}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary" onClick={() => console.log("Button Clicked...")}>
                Next
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </SectionCard>
  );
};

export default VoterInfo;


// import React from 'react';
// import { useFormContext, Controller } from 'react-hook-form';
// import { TextField, Button, MenuItem, Grid, Box } from '@mui/material';
// import { DatePicker } from '@mui/lab';
// import { useNavigate } from 'react-router-dom';
// import SectionCard from '../components/SectionCard';
// import Breadcrumbs from '../components/Breadcrumbs';
// import { VoterFormData } from '../types';

// const VoterInfo: React.FC = () => {
//   const navigate = useNavigate();
//   const { control, register, handleSubmit, watch, formState: { errors } } = useFormContext<VoterFormData>();

//   const onSubmit = (data: VoterFormData) => {
//     const driversLicense = watch('driversLicense');
//     const ssn = watch('ssn');
//     console.log("Submit clicked....")
//     if (!driversLicense && !ssn) {
//       alert('Please provide either a Driver’s License or SSN.');
//       return;
//     }

//     navigate('/address-information');
//   };

//   return (
//     <SectionCard>
//       <Breadcrumbs steps={['Voter Info', 'Address Information', 'Voting Details', 'Review']} />
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               {...register('firstName', { required: 'First Name is required' })}
//               label="First Name"
//               fullWidth
//               error={!!errors.firstName}
//               helperText={errors.firstName?.message}
//               defaultValue=""
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               {...register('lastName', { required: 'Last Name is required' })}
//               label="Last Name"
//               fullWidth
//               error={!!errors.lastName}
//               helperText={errors.lastName?.message}
//               defaultValue=""
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               {...register('gender', { required: 'Gender is required' })}
//               label="Gender"
//               select
//               fullWidth
//               error={!!errors.gender}
//               helperText={errors.gender?.message}
//               defaultValue=""
//             >
//               <MenuItem value="Male">Male</MenuItem>
//               <MenuItem value="Female">Female</MenuItem>
//               <MenuItem value="Other">Other</MenuItem>
//             </TextField>
//           </Grid>
//           {/* <Grid item xs={12} sm={6}>
//             <Controller
//               name="dob"
//               control={control}
//               rules={{ required: 'Date of Birth is required' }}
//               render={({ field }) => (
//                 <DatePicker
//                   {...field}
//                   label="Date of Birth"
//                   renderInput={(params: any) => (
//                     <TextField
//                       {...params}
//                       fullWidth
//                       error={!!errors.dob}
//                       helperText={errors.dob?.message}
//                     />
//                   )}
//                 />
//               )}
//             />
//           </Grid> */}
//           <Grid item xs={12} sm={6}>
//             <TextField
//               {...register('driversLicense')}
//               label="Driver’s License"
//               fullWidth
//               error={!!errors.driversLicense}
//               helperText={errors.driversLicense?.message}
//               defaultValue=""
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               {...register('ssn')}
//               label="SSN"
//               fullWidth
//               error={!!errors.ssn}
//               helperText={errors.ssn?.message}
//               defaultValue=""
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Box display="flex" justifyContent="space-between">
//               <Button variant="contained" color="secondary" onClick={() => navigate('/')}>
//                 Cancel
//               </Button>
//               <Button type="submit" variant="contained" color="primary">
//                 Next
//               </Button>
//             </Box>
//           </Grid>
//         </Grid>
//       </form>
//     </SectionCard>
//   );
// };

// export default VoterInfo;



// import React from 'react';
// import { Controller, useFormContext } from 'react-hook-form';
// import { TextField, Button, MenuItem, Grid, Box } from '@mui/material';
// import { DatePicker } from '@mui/lab';
// import { useNavigate } from 'react-router-dom';
// import SectionCard from '../components/SectionCard';
// import Breadcrumbs from '../components/Breadcrumbs';
// import { VoterFormData } from '../types';

// const VoterInfo: React.FC = () => {
//   const navigate = useNavigate();
//   const { register, handleSubmit, watch, control, formState: { errors } } = useFormContext<VoterFormData>();

//   const onSubmit = (data: VoterFormData) => {
//     const driversLicense = watch('driversLicense');
//     const ssn = watch('ssn');

//     if (!driversLicense && !ssn) {
//       alert('Please provide either a Driver’s License or SSN.');
//       return;
//     }

//     navigate('/address-information');
//   };

//   return (
//     <SectionCard>
//       <Breadcrumbs steps={['Voter Info', 'Address Information', 'Voting Details', 'Review']} />
//       <br />
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               {...register('firstName', { required: 'First Name is required' })}
//               label="First Name"
//               fullWidth
//               error={!!errors.firstName}
//               helperText={errors.firstName?.message}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               {...register('lastName', { required: 'Last Name is required' })}
//               label="Last Name"
//               fullWidth
//               error={!!errors.lastName}
//               helperText={errors.lastName?.message}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               {...register('gender', { required: 'Gender is required' })}
//               label="Gender"
//               select
//               fullWidth
//               error={!!errors.gender}
//               helperText={errors.gender?.message}
//             >
//               <MenuItem value="Male">Male</MenuItem>
//               <MenuItem value="Female">Female</MenuItem>
//               <MenuItem value="Other">Other</MenuItem>
//             </TextField>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             {/* <TextField
//               {...register('dob', { required: 'Date of Birth is required' })}
//               label="Date of Birth"
//               type="date"
//               fullWidth
//               InputLabelProps={{ shrink: true }}
//               error={!!errors.dob}
//               helperText={errors.dob?.message}
//             /> */}
//             <Controller
//               name="dob"
//               control={control}
//               rules={{ required: 'Date of Birth is required' }}
//               render={({ field }) => (
//                 <DatePicker
//                   {...field}
//                   label="Date of Birth"
//                   renderInput={(params: any) => (
//                     <TextField
//                       {...params}
//                       fullWidth
//                       error={!!errors.dob}
//                       helperText={errors.dob?.message}
//                     />
//                   )}
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               {...register('driversLicense')}
//               label="Driver’s License"
//               fullWidth
//               error={!!errors.driversLicense}
//               helperText={errors.driversLicense?.message}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               {...register('ssn')}
//               label="SSN"
//               fullWidth
//               error={!!errors.ssn}
//               helperText={errors.ssn?.message}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Box display="flex" justifyContent="space-between">
//               <Button variant="contained" color="secondary" onClick={() => navigate('/')}>
//                 Cancel
//               </Button>
//               <Button type="submit" variant="contained" color="primary">
//                 Next
//               </Button>
//             </Box>
//           </Grid>
//         </Grid>
//       </form>
//     </SectionCard>
//   );
// };

// export default VoterInfo;
