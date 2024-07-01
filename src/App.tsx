import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import VoterInfo from './pages/VoterInfo';
import AddressInformation from './pages/AddressInformation';
import VotingDetails from './pages/VotingDetails';
import ReviewScreen from './pages/ReviewScreen';
import Header from './components/Header';
import { VoterFormData } from './types';

const App: React.FC = () => {
  const methods = useForm<VoterFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      gender: '',
      dob: '',
      driversLicense: '',
      ssn: '',
      streetNumber: '',
      streetName: '',
      addressDetail: '',
      city: '',
      state: 'West Virginia',
      zipCode: '',
      party: '',
      email: '',
      phoneNumber: ''
    },
  });

  return (
    <Router>
      <Header title="Online Voter Registration" />
      <FormProvider {...methods}>
        <Routes>
          <Route path="/" element={<VoterInfo />} />
          <Route path="/address-information" element={<AddressInformation />} />
          <Route path="/voting-details" element={<VotingDetails />} />
          <Route path="/review-screen" element={<ReviewScreen />} />
        </Routes>
      </FormProvider>
    </Router>
  );
};

export default App;
