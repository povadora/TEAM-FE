import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Dropdown from '../../shared/components/dropdown/Dropdown';
import axiosInstance from '../../core/utils/axiosInstance';
import FormInputField from '../../shared/components/fields/FormInputFields';

export enum accountRole {
  ADMIN = 'Admin',
  EMUMERATOR = 'Emurator',
  INTERN = 'Intern',
}

export interface AccountFormData {
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  role: accountRole | null;
}

const initialFormData: AccountFormData = {
  userName: '',
  password: '',
  firstName: '',
  lastName: '',
  role: null,
};

const AddAccount: React.FC = () => {
  const [formData, setFormData] = useState<AccountFormData>(initialFormData);
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const { accountUuid } = useParams<{ accountUuid: string }>();

  useEffect(() => {
    if (accountUuid) {
      axiosInstance
        .get(`/accounts/${accountUuid}`)
        .then((response) => {
          setFormData(response.data);
          setIsEditMode(true);
        })
        .catch((error) => {
          console.error('Error fetching account data:', error);
        });
    }
  }, [accountUuid]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleDropdownChange = (
    fieldName: keyof AccountFormData,
    value: accountRole | null
  ) => {
    setFormData({
      ...formData,
      [fieldName]: value ?? '',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = isEditMode
        ? await axiosInstance.patch(`/accounts/update-account/${accountUuid}`, {
            userName: formData.userName,
            password: formData.password,
            firstName: formData.firstName,
            lastName: formData.lastName,
            role: formData.role,
          })
        : await axiosInstance.post(`/accounts/create-account`, {
            userName: formData.userName,
            password: formData.password,
            firstName: formData.firstName,
            lastName: formData.lastName,
            role: formData.role,
          });

      console.log(response.data);
      isEditMode
        ? alert('Account Succesfully Updated!')
        : alert('Account Succesfully Added!');
      navigate('/dashboard/account');
    } catch (error: any) {
      if (error.response) {
        console.error(
          'There was an error submitting the form!',
          error.response.data
        );
      } else if (error.request) {
        console.error('No response received from the server!', error.request);
      } else {
        console.error('Error', error.message);
      }
    }
  };

  const handleDelete = async () => {
    try {
      if (accountUuid) {
        await axiosInstance.delete(`/accounts/delete-account/${accountUuid}`);
        console.log('Account deleted successfully');
        navigate('/dashboard/account');
      }
    } catch (error) {
      console.error('There was an error deleting the account!', error);
    }
  };

  return (
    <div className="add-household-container">
      <section className="add-household-header"></section>

      <div className="new-users">
        <form onSubmit={handleSubmit}>
          <FormInputField
            placeholder="Enter username"
            type="text"
            onChange={onChange}
            name="userName"
            value={formData.userName}
          />
          <br />
          <FormInputField
            placeholder="Enter password"
            type="password"
            onChange={onChange}
            name="password"
            value={formData.password}
          />
          <br />
          <FormInputField
            placeholder="First Name"
            type="text"
            onChange={onChange}
            name="firstName"
            value={formData.firstName}
          />
          <br />
          <FormInputField
            placeholder="Last Name"
            type="text"
            onChange={onChange}
            name="lastName"
            value={formData.lastName}
          />
          <br />
          <Dropdown<accountRole>
            name="role"
            values={accountRole}
            selectedValue={formData.role}
            onChange={(value) => handleDropdownChange('role', value)}
          />

          <br />
          <div>
            <button type="submit" onClick={handleSubmit}>
              {isEditMode ? 'Update' : 'Saveeee'}
            </button>
            {isEditMode && (
              <button type="button" onClick={handleDelete}>
                Delete
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAccount;
