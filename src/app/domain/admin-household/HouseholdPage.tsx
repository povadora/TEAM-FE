import React from 'react';
import DashboardCards from '../../shared/components/card/DashboardCards';
import DataTable from '../../shared/components/table/DataTable';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../shared/components/buttons/PrimaryButton';
import DropdownButton from '../../shared/components/dropdownButton/dropdownButton';

const HouseholdPage: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    navigate('/dashboard/Add Inhabitant');
  };

  const handleDropdownSelect = (option: string) => {
    if (option === 'Complete') {
      navigate('/dashboard/complete-page');
    } else if (option === 'Incomplete') {
      navigate('/dashboard/incomplete-page');
    } else {
      console.log('Selected option: ${option}');
    }
  };

  return (
    <div>
      <div className="AddInhabitantdButton"></div>
      <PrimaryButton
        buttonText="Add Inhabitant"
        handleButtonClick={handleButtonClick}
      />

      <DropdownButton
        buttonText="View Profile"
        options={['Complete', 'Incomplete']}
        onSelect={handleDropdownSelect}
      />

      <h1>HOUSEHOLD PAGE</h1>
      <div
        className="button-bar"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <PrimaryButton
          buttonText="Personal"
          handleButtonClick={() => console.log('Personal button clicked')}
        />
        <PrimaryButton
          buttonText="Health"
          handleButtonClick={() => console.log('Health button clicked')}
        />
        <PrimaryButton
          buttonText="Others"
          handleButtonClick={() => console.log('Others button clicked')}
        />
      </div>
      <DashboardCards />
      <DataTable />
    </div>
  );
};

export default HouseholdPage;