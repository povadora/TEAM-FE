import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaHome,
  FaUsers,
  FaVoteYea,
  FaUserSlash,
  FaPlus,
} from 'react-icons/fa';
import PrimaryButton from '../../shared/components/buttons/PrimaryButton';
import DropdownButton from '../../shared/components/dropdown/dropdownButton';
import Cart from '../../shared/components/cart/Cart';
import './HouseholdPage.scss';
import HouseholdTable from './household/HouseholdTable';
import SearchBar from '../../shared/components/fields/SearchBar';

const HouseholdPage: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = async (path: string) => {
    navigate(path);
  };

  const handleDropdownSelect = (option: string) => {
    if (option === 'Complete') {
      navigate('/dashboard/complete-page');
    } else if (option === 'Incomplete') {
      navigate('/dashboard/incomplete-page');
    } else {
      console.log(`Selected option: ${option}`);
    }
  };

  const handleSearch = (query: string) => {
    console.log(`Search query: ${query}`);
    // Implement search functionality here
  };

  return (
    <div className="household">
      <div className="household-header-button">
        <div>
          <h1>HOUSEHOLD PAGE</h1>
        </div>
        <div className="header-buttons">
          <PrimaryButton
            buttonText="New Household"
            icon={FaPlus}
            handleButtonClick={() =>
              handleButtonClick('/dashboard/add-household')
            }
            className="new-household"
          />
          <PrimaryButton
            buttonText="Others"
            icon={FaPlus}
            handleButtonClick={() => console.log('Others button clicked')}
            className="new-household"
          />
        </div>
      </div>

      <div className="household-cart">
        <div className="household-cart-item">
          <Cart
            title="Households"
            value={150}
            icon={FaHome}
            description="Total households for this year"
          />
        </div>
        <div className="household-cart-item">
          <Cart
            title="Inhabitants"
            value={450}
            icon={FaUsers}
            description="Total inhabitants for this year"
          />
        </div>
        <div className="household-cart-item">
          <Cart
            title="Voters"
            value={200}
            icon={FaVoteYea}
            description="Total voters for this year"
          />
        </div>
        <div className="household-cart-item">
          <Cart
            title="Non-Voters"
            value={50}
            icon={FaUserSlash}
            description="Total non-voters for this year"
          />
        </div>
      </div>

      <div className="household-search-sort">
        <SearchBar placeholder="Search..." onSearch={handleSearch} />
        <DropdownButton
          buttonText="View Profile"
          options={['Complete', 'Incomplete']}
          onSelect={handleDropdownSelect}
        />
        <DropdownButton
          buttonText="Age Bracket"
          options={['Complete', 'Incomplete']}
          onSelect={handleDropdownSelect}
        />
        <DropdownButton
          buttonText="Deceased"
          options={['Alive', 'Deceased']}
          onSelect={handleDropdownSelect}
        />
        <DropdownButton
          buttonText="Birthday"
          options={['Complete', 'Incomplete']}
          onSelect={handleDropdownSelect}
        />
      </div>
      <div className="household-table">
        <HouseholdTable />
      </div>
    </div>
  );
};

export default HouseholdPage;
