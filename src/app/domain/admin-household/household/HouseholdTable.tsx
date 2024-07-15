import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../core/utils/axiosInstance';
import './HouseholdTable.scss';

interface Household {
  householdId: number;
  householdUuid: string;
  householdPhoto?: string;
  householdNumber: string;
  householdName: string;
  streetName?: string;
  subdivision?: string;
  zone?: string;
  sitio?: string;
  purok?: string;
  barangay: string;
  municipality: string;
  province: string;
  structureMaterials?: string;
  numberOfRooms?: string;
  numberOfToilets?: string;
  allowBoarders?: boolean;
  hasRentalPermit?: boolean;
  hasBackyardGarden?: boolean;
  otherIncomeSource?: string;
  numberOfPets?: string;
  numberOfTwoWheeledVehicles?: string;
  numberOfThreeWheeledVehicles?: string;
  numberOfFourWheeledVehicles?: string;
  createdAt: Date;
  //   inhabitants: Inhabitant[];
}
const HouseholdTable: React.FC = () => {
  const [households, setHouseholds] = useState<Household[]>([]); // Specify the type as Household[]
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get('/household/all-household')
      .then((response) => {
        setHouseholds(response.data); // Assuming response.data is an array of Household objects
      })
      .catch((error) => {
        console.error('Error fetching households:', error);
      });
  }, []);

  const handleRowClick = (householdUuid: string) => {
    navigate(`/dashboard/edit-household/${householdUuid}`);
  };

  return (
    <div className="household-list-container">
      <h1>Household List</h1>
      <table>
        <thead>
          <tr>
            <th>Household Number</th>
            <th>Household Name</th>
            <th>Street Name</th>
            <th>Subdivision</th>
            <th>Zone</th>
            <th>Sitio</th>
            <th>Purok</th>
          </tr>
        </thead>
        <tbody>
          {households.map((household) => (
            <tr
              key={household.householdUuid} // Use householdUuid as key
              onClick={() => handleRowClick(household.householdUuid)}
            >
              <td>{household.householdNumber}</td>
              <td>{household.householdName}</td>
              <td>{household.streetName}</td>
              <td>{household.subdivision}</td>
              <td>{household.zone}</td>
              <td>{household.sitio}</td>
              <td>{household.purok}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HouseholdTable;
