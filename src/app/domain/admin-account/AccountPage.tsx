import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../shared/components/buttons/PrimaryButton';
import AccountTable from '../../domain/admin-account/AccountTable';

const AccountPage: React.FC = () => {
  const navigate = useNavigate();

  const hanldeButtonClick = async (path: string) => {
    navigate(path);
  };
  return (
    <div className="Create Account">
      <h1>Account Page</h1>
      <PrimaryButton
        buttonText="Add User"
        handleButtonClick={() => hanldeButtonClick('/dashboard/add-account')}
      />
      <AccountTable />
    </div>
  );
};

export default AccountPage;
