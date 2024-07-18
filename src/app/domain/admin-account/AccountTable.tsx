import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../core/utils/axiosInstance';
import { accountRole } from './AddAccount';

interface Account {
  accountId: number;
  accountUuid: string;
  userName: string;
  firstName: string;
  lastName: string;
  role: accountRole;
}

const AccountTable: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get('/accounts/registered-account')
      .then((response) => {
        setAccounts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching account:', error);
      });
  }, []);

  const handleRowClick = (accountUuid: string) => {
    navigate(`/dashboard/edit-account/${accountUuid}`);
  };

  const handleEdit = (accountUuid: string) => {
    navigate(`/dashboard/edit-account/${accountUuid}`);
  };

  const handleDelete = async (accountUuid: string) => {
    try {
      if (accountUuid) {
        await axiosInstance.delete(`/accounts/delete-account/${accountUuid}`);
        console.log('Household deleted successfully');
        alert('Deleted Successfully!');
        navigate('/dashboard/account');
      }
    } catch (error) {
      alert('Error attempt to delete');
      console.error('There was an error deleting the household!', error);
    }
  };

  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {accounts.map((account) => (
            <tr
              key={account.accountUuid}
              onClick={() => handleRowClick(account.accountUuid)}
            >
              <td>{account.userName}</td>
              <td>{account.firstName}</td>
              <td>{account.lastName}</td>
              <td>{account.role}</td>
              <td>
                <button onClick={() => handleEdit(account.accountUuid)}>
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(account.accountUuid)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountTable;
