export interface VoterFormData {
  // Voter Info
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  driversLicense?: string;
  ssn?: string;

  // Address Information
  streetNumber: string;
  streetName: string;
  addressDetail?: string;
  city: string;
  state: string;
  zipCode: string;

  // Voting Details
  party: string;
  email: string;
  phoneNumber: string;
}
