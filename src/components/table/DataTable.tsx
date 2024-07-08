import React from "react";
import "./DataTable.scss";

const DataTable: React.FC = () => {
  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Charlie</td>
            <td>charlie@example.com</td>
            <td>Admin</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Aurrell</td>
            <td>aurell@example.com</td>
            <td>User</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
