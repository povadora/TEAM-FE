import React from 'react';
import FormInputField from '../../../shared/components/fields/FormInputFields';
import Dropdown from '../../../shared/components/dropdown/Dropdown';
import Checkbox from '../../../shared/components/fields/Checkbox';

export enum householdRole {
  SON = 'Son',
  DAUGHTER = 'Daughter',
  FATHER = 'Father',
  MOTHER = 'Mother',
  FRIEND = 'Friend',
  IN_LAW = 'In-law',
  RELATIVE = 'Relative',
  WORKER = 'Worker',
  TENANT = 'Tenant',
  OTHER = 'Other',
}

export enum inhabitantGender {
  MALE = 'Male',
  FEMALE = 'Female',
  NON_BINARY = 'Non-binary',
  PREFER_NOT_TO_SAY = 'Prefer not to say',
}

export enum inhabitantCivilStatus {
  SINGLE = 'Single',
  MARRIED = 'Married',
  SEPARATED = 'Separated',
  WIDOW = 'Widow',
}

interface PersonalFormProps {
  formData: {
    profilePhoto: File | null;
    firstName: string;
    householdName: string;
    middleName: string;
    lastName: string;
    householdRole: householdRole | null;
    gender: inhabitantGender | null;
    isRepresentative: boolean;
    birthday: string;
    email: string;
    civilStatus: inhabitantCivilStatus | null;
    mobileNumber: string;
  };

  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDropdownChange: (
    name: string,
    value: householdRole | inhabitantGender | inhabitantCivilStatus | null
  ) => void;
  handleCheckboxChange: (name: string, checked: boolean) => void;
}

const PersonalForm: React.FC<PersonalFormProps> = ({
  formData,
  handleChange,
  handleFileChange,
  handleDropdownChange,
  handleCheckboxChange,
}) => {
  return (
    <div className="personal-layout">
      <section className="personal-left-form">
        <h4>Personal</h4>
        <label>Profile Photo</label>
        <br></br>
        <input type="file" name="profilePhoto" onChange={handleFileChange} />
        <br></br>

        <label>Household Role</label>
        <Dropdown<householdRole>
          name="householdRole"
          values={householdRole}
          selectedValue={formData.householdRole}
          onChange={(value) => handleDropdownChange('householdRole', value)}
        />
        <br></br>

        <Checkbox
          name="isRepresentative"
          checked={formData.isRepresentative}
          onChange={(checked) =>
            handleCheckboxChange('isRepresentative', checked)
          }
        />
        <label>Is Representative</label>
        <br></br>
        <FormInputField
          type="text"
          name="firstName"
          placeholder="Firstname"
          value={formData.firstName}
          onChange={handleChange}
        />
        <FormInputField
          type="text"
          name="middleName"
          placeholder="Middlename"
          value={formData.middleName}
          onChange={handleChange}
        />
        <FormInputField
          type="text"
          name="lastName"
          placeholder="Lastname"
          value={formData.lastName}
          onChange={handleChange}
        />

        <label>Inhabitant Gender</label>
        <Dropdown<inhabitantGender>
          name="gender"
          values={inhabitantGender}
          selectedValue={formData.gender}
          onChange={(value) => handleDropdownChange('gender', value)}
        />

        <FormInputField
          type="date"
          name="birthday"
          placeholder="Birthday"
          value={formData.birthday}
          onChange={handleChange}
        />
      </section>

      <section className="contact-right-form">
        <h4>Contact</h4>
        <FormInputField
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Civil Status</label>
        <Dropdown<inhabitantCivilStatus>
          name="civilStatus"
          values={inhabitantCivilStatus}
          selectedValue={formData.civilStatus}
          onChange={(value) => handleDropdownChange('civilStatus', value)}
        />
        <FormInputField
          type="text"
          name="mobileNumber"
          placeholder="Email"
          value={formData.mobileNumber}
          onChange={handleChange}
        />
      </section>
    </div>
  );
};

export default PersonalForm;
