import DataTable from '../../shared/components/table/DataTable';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../shared/components/buttons/PrimaryButton';
import DropdownButton from '../../shared/components/dropdown/dropdownButton';
import React from 'react';
import Cart from '../../shared/components/cart/Cart';
import './HouseholdPage.scss';
import HouseholdTable from './household/HouseholdTable';

const HouseholdPage: React.FC = () => {
  const navigate = useNavigate();

  const hanldeButtonClick = async (path: string) => {
    navigate(path);
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
    <div className="household">
      {/* // para sa header ug buttons */}
      <div className="household-header-button">
        <div>
          <h1>HOUSEHOLD PAGE</h1>
        </div>
        <div>
          <PrimaryButton
            buttonText="Add Household"
            handleButtonClick={() =>
              hanldeButtonClick('/dashboard/add-household')
            }
          />
        </div>
      </div>

      <div className="household-cart">
        <div className="household-cart-item">
          <Cart />
        </div>
        <div className="household-cart-item">
          <Cart />
        </div>
        <div className="household-cart-item">
          <Cart />
        </div>
        <div className="household-cart-item">
          <Cart />
        </div>
      </div>

      {/* search/sort */}
      <div className="household-search-sort">
        <DropdownButton
          buttonText="View Profile"
          options={['Complete', 'Incomplete']}
          onSelect={handleDropdownSelect}
        />
      </div>
      {/* <PrimaryButton
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
        /> */}

      {/* dri and para sa table */}
      <div className="household-table">
        <HouseholdTable />
        <PrimaryButton
          buttonText="Add Inhabitant"
          handleButtonClick={() =>
            hanldeButtonClick('/dashboard/add-inhabitant')
          }
        />
      </div>
    </div>
  );
};

export default HouseholdPage;
