import DataTable from '../../shared/components/table/DataTable';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../shared/components/buttons/PrimaryButton';
import DropdownButton from '../../shared/components/dropdownButton/dropdownButton';
import React, { useState, useCallback } from 'react';
import Cart from '../../shared/components/cart/Cart';
import useFetchHouseholds from '../../core/hooks/UseFetchHouseholds';
import useWebSocket from '../../core/hooks/UseWebSocket';
import { Inhabitant, Household } from './../../core/types';
import './HouseholdPage.scss';

interface Totals {
  households: number;
  inhabitants: number;
  voters: number;
  nonVoters: number;
}

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
      console.log('Selected option: ${option}');
    }
  };

  const [totals, setTotals] = useState<Totals>({
    households: 0,
    inhabitants: 0,
    voters: 0,
    nonVoters: 0,
  });

  const { data, error, loading } = useFetchHouseholds();

  const initializeTotals = useCallback((households: Household[]) => {
    const initialTotals = households.reduce(
      (acc, household) => {
        acc.households += 1;
        acc.inhabitants += household.inhabitants?.length || 0;
        acc.voters +=
          household.inhabitants?.filter(
            (inhabitant) => inhabitant.isRegisteredVoter
          ).length || 0;
        acc.nonVoters +=
          household.inhabitants?.filter(
            (inhabitant) => !inhabitant.isRegisteredVoter
          ).length || 0;
        return acc;
      },
      { households: 0, inhabitants: 0, voters: 0, nonVoters: 0 }
    );
    setTotals(initialTotals);
  }, []);

  React.useEffect(() => {
    if (data) {
      initializeTotals(data);
    }
  }, [data, initializeTotals]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="household">
      {/* // para sa header ug buttons */}
      <div className="household-header-button">
        <div>
          <h1>HOUSEHOLD PAGE</h1>
        </div>
        <div>
          <PrimaryButton
            buttonText="Add Inhabitant"
            handleButtonClick={() =>
              handleButtonClick('/dashboard/Add Inhabitant')
            }
          />
        </div>
      </div>

      <div className="household-cart">
        <div className="household-cart-item">
          <Cart title="Households" value={totals.households} />
        </div>
        <div className="household-cart-item">
          <Cart title="Inhabitants" value={totals.inhabitants} />
        </div>
        <div className="household-cart-item">
          <Cart title="Voters" value={totals.voters} />
        </div>
        <div className="household-cart-item">
          <Cart title="Non-Voters" value={totals.nonVoters} />
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
        <DataTable />
        <PrimaryButton
          buttonText="Add Inhabitant"
          handleButtonClick={() =>
            handleButtonClick('/dashboard/Add Inhabitant')
          }
        />
      </div>
    </div>
  );
};

export default HouseholdPage;
