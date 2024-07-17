import React from 'react';
import FormInputField from '../../../shared/components/fields/FormInputFields';
import Dropdown from '../../../shared/components/dropdown/Dropdown';
import BooleanSelect from '../../../shared/components/dropdown/BooleanSelect';
import { InhabitantFormData } from '../AddInhabitant';

export enum inhabitantBloodType {
  B_NEGATIVE = 'B RhD negative (B-)',
  O_POSITIVE = 'O RhD positive (O+)',
  O_NEGATIVE = 'O RhD negative (O-)',
  AB_POSITIVE = 'AB RhD positive (AB+)',
  AB_NEGATIVE = 'AB RhD negative (AB-)',
}

interface HealthFormProps {
  formData: {
    inhabitantBloodType: inhabitantBloodType | null;
    healthRemarks: string;
    isPersonWithDisability: boolean | null;
    disabilityDetails: string;
    isPregnant: boolean | null;
    expectedLabourDate: string;
    isSingleParent: boolean | null;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDropdownChange: (
    name: string,
    value: inhabitantBloodType | null
  ) => void;
  handleCheckboxChange: (name: string, checked: boolean) => void;
  handleBooleanChange: (
    name: keyof InhabitantFormData,
    value: boolean | null
  ) => void;
}

const HealthForm: React.FC<HealthFormProps> = ({
  formData,
  handleChange,
  handleDropdownChange,
  handleBooleanChange,
}) => {
  return (
    <div className="health-layout">
      <section className="general-left-form">
        <h4>General</h4>
        <label>Blood Type</label>
        <Dropdown<inhabitantBloodType>
          name="inhabitantBloodType"
          values={inhabitantBloodType}
          selectedValue={formData.inhabitantBloodType}
          onChange={(value) =>
            handleDropdownChange('inhabitantBloodType', value)
          }
        />
        <FormInputField
          type="text"
          name="healthRemarks"
          placeholder="Health Remarks"
          value={formData.healthRemarks}
          onChange={handleChange}
        />
        <label>Are you a person with Disablitity?</label>
        <BooleanSelect
          value={formData.isPersonWithDisability}
          onChange={(value) =>
            handleBooleanChange('isPersonWithDisability', value)
          }
        />
        <FormInputField
          type="text"
          name="disabilityDetails"
          placeholder="Dis-ability Details"
          value={formData.disabilityDetails}
          onChange={handleChange}
        />
      </section>
      <section className="pregnancy-right-form">
        <h4>Pregnancy</h4>
        <label>Are you Pregnant?</label>
        <BooleanSelect
          value={formData.isPregnant}
          onChange={(value) => handleBooleanChange('isPregnant', value)}
        />

        <FormInputField
          type="date"
          name="expectedLabourDate"
          placeholder="Expected Labour Date"
          value={formData.expectedLabourDate}
          onChange={handleChange}
        />
        <label>Are you a single Parent?</label>
        <BooleanSelect
          value={formData.isSingleParent}
          onChange={(value) => handleBooleanChange('isSingleParent', value)}
        />
      </section>
    </div>
  );
};

export default HealthForm;
