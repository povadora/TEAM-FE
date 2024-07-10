import React from "react";
import DashboardCards from "../../components/card/DashboardCards";
import DataTable from "../../components/table/DataTable";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import DropdownButton from "../../components/dropdownButton/dropdownButton";

const HouseholdPage: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    navigate("/dashboard/newHousehold");
  };

  const handleDropdownSelect = (option: string) => {
    if (option === "Complete") {
      navigate("/dashboard/complete-page");
    } else if (option === "Incomplete") {
      navigate("/dashboard/incomplete-page");
    } else {
      console.log(`Selected option: ${option}`);
    }
  };

  return (
    <div>
      <div className="AddNewHouseholdButton"></div>
      <PrimaryButton
        buttonText="Add New Household"
        handleButtonClick={handleButtonClick}
      />

      <DropdownButton
        buttonText="View Profile"
        options={["Complete", "Incomplete"]}
        onSelect={handleDropdownSelect}
      />

      <h1>HOUSEHOLD PAGE</h1>
      <DashboardCards />
      <DataTable />
    </div>
  );
};

export default HouseholdPage;
