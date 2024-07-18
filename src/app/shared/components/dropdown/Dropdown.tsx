import React from 'react';

interface DropdownProps<T> {
  name: string;
  values: { [key: string]: T };
  selectedValue: T | null;
  onChange: (value: T | null) => void;
}

const Dropdown = <T extends string | number>({
  name,
  values,
  selectedValue,
  onChange,
}: DropdownProps<T>) => {
  return (
    <select
      name={name}
      value={selectedValue ?? ''}
      onChange={(e) => onChange(e.target.value ? (e.target.value as T) : null)}
    >
      <option value="">-- Select an option --</option>
      {Object.values(values).map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
