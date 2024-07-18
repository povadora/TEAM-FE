import React from 'react';
import FormInputField from '../../../shared/components/fields/FormInputFields';
import Dropdown from '../../../shared/components/dropdown/Dropdown';
import BooleanSelect from '../../../shared/components/dropdown/BooleanSelect';
import { InhabitantFormData } from '../AddInhabitant';
import Checkbox from '../../../shared/components/fields/Checkbox';

export enum studentDetails {
  ELEMENTARY = 'Elementary',
  HIGHSCHOOL = 'Highschool',
  SENIOR_HIGHSCHOOL = 'Senior Highschool',
  COLLEGE = 'College',
}

interface OtherFormProps {
  formData: {
    isStudent: boolean | null;
    studentDetails: studentDetails | null;
    isRegisteredVoter: boolean;
    placeOfRegistration: string;
    occupation: string;
    currentOccupationPlace: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDropdownChange: (name: string, value: studentDetails | null) => void;
  handleCheckboxChange: (name: string, checked: boolean) => void;
  handleBooleanChange: (
    name: keyof InhabitantFormData,
    value: boolean | null
  ) => void;
}

const OtherForm: React.FC<OtherFormProps> = ({
  formData,
  handleChange,
  handleCheckboxChange,
  handleBooleanChange,
  handleDropdownChange,
}) => {
  return (
    <div className="health-layout">
      <section className="general-left-form">
        <h4>General</h4>
        <label>Are you a Student?</label>
        <BooleanSelect
          value={formData.isStudent}
          onChange={(value) => handleBooleanChange('isStudent', value)}
        />

        <label>Student Details</label>
        <Dropdown<studentDetails>
          name="studentDetails"
          values={studentDetails}
          selectedValue={formData.studentDetails}
          onChange={(value) => handleDropdownChange('studentDetails', value)}
        />
        <label>Is Registered Voter</label>
        <Checkbox
          name="isRegisteredVoter"
          checked={formData.isRegisteredVoter}
          onChange={(checked) =>
            handleCheckboxChange('isRegisteredVoter', checked)
          }
        />
        <br></br>

        <FormInputField
          type="text"
          name="placeOfRegistration"
          placeholder="Place of Registration"
          value={formData.placeOfRegistration}
          onChange={handleChange}
        />
      </section>
      <section className="pregnancy-right-form">
        <h4>Occupation</h4>
        <FormInputField
          type="text"
          name="occupation"
          placeholder="Occupation"
          value={formData.occupation}
          onChange={handleChange}
        />

        <FormInputField
          type="text"
          name="currentOccupationPlace"
          placeholder="Current Occupation place"
          value={formData.currentOccupationPlace}
          onChange={handleChange}
        />
      </section>
    </div>
  );
};

export default OtherForm;
