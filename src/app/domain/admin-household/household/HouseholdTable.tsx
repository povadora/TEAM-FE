import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../core/utils/axiosInstance';
import './HouseholdTable.scss';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface Inhabitant {
  inhabitantId: number;
  inhabitantUuid: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  birthday?: Date;
  gender?: string;
  mobileNumber?: string;
  civilStatus?: string;
  householdRole?: string;
  createdAt: Date;
  isRegisteredVoter: boolean;
}

interface Household {
  householdId: number;
  householdUuid: string;
  householdNumber: string;
  householdName: string;
  streetName?: string;
  subdivision?: string;
  zone?: string;
  sitio?: string;
  purok?: string;
  createdAt: Date;
  inhabitants: Inhabitant[];
}

const HouseholdTable: React.FC = () => {
  const [households, setHouseholds] = useState<Household[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get('/household/all-household')
      .then((response) => {
        setHouseholds(response.data);
      })
      .catch((error) => {
        console.error('Error fetching households:', error);
      });
  }, []);

  const handleRowClick = (householdUuid: string) => {
    navigate(`/dashboard/edit-household/${householdUuid}`);
  };

  const handleAddInhabitant = (householdUuid: string) => {
    navigate(`/dashboard/add-inhabitant/${householdUuid}`);
  };

  const handleEdit = (inhabitantUuid: string, householdUuid: string) => {
    navigate(`/dashboard/edit-inhabitant/${householdUuid}/${inhabitantUuid}`);
  };

  const handleDelete = async (inhabitantUuid: string) => {
    try {
      if (inhabitantUuid) {
        await axiosInstance.delete(
          `/inhabitant/delete-inhabitant/${inhabitantUuid}`
        );
        console.log('Inhabitant deleted successfully');
        alert('Deleted Successfully!');
        navigate('/dashboard/household');
      }
    } catch (error) {
      alert('Error attempt to delete');
      console.error('There was an error deleting the household!', error);
    }
  };

  return (
    <div className="household-list-container">
      <h1>Household List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Birthday</th>
            <th>Gender</th>
            <th>Mobile</th>
            <th>Civil Status</th>
            <th>Household Role</th>
            <th>Date</th>
            <th>Voter</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {households.map((household) => (
            <React.Fragment key={household.householdUuid}>
              <tr>
                <td colSpan={10} className="household-info">
                  <div
                    className="household-details"
                    onClick={() => handleRowClick(household.householdUuid)}
                    style={{ cursor: 'pointer' }}
                  >
                    {`${household.householdNumber} ${household.householdName} ${
                      household.streetName || ''
                    } ${household.subdivision || ''} ${household.zone || ''} ${
                      household.sitio || ''
                    } ${household.purok || ''}`}
                  </div>
                  <div className="household-action">
                    <button
                      onClick={() =>
                        handleAddInhabitant(household.householdUuid)
                      }
                    >
                      Add Inhabitant
                    </button>
                  </div>
                </td>
              </tr>
              {household.inhabitants.map((inhabitant) => (
                <tr key={inhabitant.inhabitantUuid}>
                  <td>{`${inhabitant.firstName} ${
                    inhabitant.middleName || ''
                  } ${inhabitant.lastName}`}</td>
                  <td>
                    {inhabitant.birthday
                      ? new Date(inhabitant.birthday).toLocaleDateString()
                      : ''}
                  </td>
                  <td>{inhabitant.gender}</td>
                  <td>{inhabitant.mobileNumber}</td>
                  <td>{inhabitant.civilStatus}</td>
                  <td>{inhabitant.householdRole}</td>
                  <td>{new Date(inhabitant.createdAt).toLocaleDateString()}</td>
                  <td>{inhabitant.isRegisteredVoter ? 'Yes' : 'No'}</td>
                  <td>Status</td>
                  <td>
                    <button
                      onClick={() =>
                        handleEdit(
                          inhabitant.inhabitantUuid,
                          household.householdUuid
                        )
                      }
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(inhabitant.inhabitantUuid)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HouseholdTable;
