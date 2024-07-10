// import React from "react";

// interface TableColumn {
//   header: string;
//   accessor: string;
//   render?: (row: any) => React.ReactNode;
// }

// interface Inhabitant {
//   fullname: string;
//   birthday: string;
//   gender: string;
//   civilStatus: string;
//   mobile: string;
//   household: string;
//   date: string;
//   voters: boolean;
//   status: string;
// }

// interface Household {
//   id: number;
//   householdName: string;
//   inhabitants: Inhabitant[];
// }

// interface AccountTableProps {
//   columns: TableColumn[];
//   data: Household[];
// }

// const AccountTable: React.FC<AccountTableProps> = ({ columns, data }) => {
//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             {columns.map((column, index) => (
//               <th key={index}>{column.header}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((household, householdIndex) => (
//             <React.Fragment key={householdIndex}>
//               <tr>
//                 <td colSpan={columns.length}>{household.householdName}</td>
//               </tr>
//               {household.inhabitants.map((inhabitant, inhabitantIndex) => (
//                 <tr key={inhabitantIndex}>
//                   {columns.map((column, colIndex) => (
//                     <td key={colIndex}>
//                       {column.render
//                         ? column.render(inhabitant)
//                         : inhabitant[column.accessor]}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//               <tr>
//                 <td colSpan={columns.length}>
//                   Total Occupants: {household.inhabitants.length}
//                 </td>
//               </tr>
//             </React.Fragment>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AccountTable;
import React from "react";

export default function AccountTable() {
  return <div>AccountTable</div>;
}
