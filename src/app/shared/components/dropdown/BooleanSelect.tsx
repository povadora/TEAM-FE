import React from 'react';

interface BooleanSelectProps {
  value: boolean | null;
  onChange: (value: boolean | null) => void;
}

const BooleanSelect: React.FC<BooleanSelectProps> = ({ value, onChange }) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const newValue =
      selectedValue === 'yes' ? true : selectedValue === 'no' ? false : null;
    onChange(newValue);
  };

  return (
    <select
      value={value === null ? '' : value ? 'yes' : 'no'}
      onChange={handleSelectChange}
    >
      <option value="">Select....</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
  );
};

export default BooleanSelect;
