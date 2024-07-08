import React from "react";

interface TableColumn {
  header: string;
  accessor: string;
  render?: (row: any) => React.ReactNode;
}

interface TableProps {
  columns: TableColumn[];
  households: any[];
}

const TableComponent: React.FC<TableProps> = ({ columns, households }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {households.map((household, householdIndex) => (
            <React.Fragment key={householdIndex}>
              <tr>
                <td colSpan={columns.length}>
                  <strong>Household: {household.householdName}</strong>
                </td>
              </tr>
              {household.inhabitants.map(
                (inhabitant: any, inhabitantIndex: number) => (
                  <tr key={inhabitantIndex}>
                    {columns.map((column, colIndex) => (
                      <td key={colIndex}>
                        {column.render
                          ? column.render(inhabitant)
                          : inhabitant[column.accessor]}
                      </td>
                    ))}
                  </tr>
                )
              )}
              <tr>
                <td colSpan={columns.length}>
                  <strong>
                    Total Occupants: {household.inhabitants.length}
                  </strong>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
