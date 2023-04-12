import React from 'react'
import "../styles/Table.scss"
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

export interface User {
  accountBalance: string;
  accountNumber: string;
  id: string;
  lastActiveDate: string;
  orgName: string;
  phoneNumber: string;
  userName: string;
  createdAt: string;
  email: string;
  education:{
    duration: string;
    employmentStatus: string;
    level: string;
    loanRepayment: string;
    officeEmail: string;
    sector: string;
    monthlyIncome: Array<String>;
  };
  guarantor:{
    address: string;
    firstName: string;
    gender: string;
    lastName: string;
    phoneNumber: string;
  };
  socials:{
    facebook: string;
    instagram: string;
    twitter: string;
  };
  profile:{
    address: string;
    avatar: string;
    bvn: string;
    currency: string;
    firstName: string;
    lastName: string;
    gender: string;
    phoneNumber: string;
  };
}

export interface UserListProps {
  users: User[]
}

const UserDataTableComponent: React.FC<UserListProps> = (props) => {
  const header = ["Organization", "Username", "email", "Phone number", "Date joined", "Status"]
  const navigate = useNavigate();
  const handleTableRowClick = (id: string) => {
    navigate(`/user/${id}`);
  }
  return (
    <div className='tableSection'>
       <table cellPadding={12} cellSpacing={20} className='table'>
        
          <tr className='tableHeaderRow'>
            {
              header.map((val, key) => {
                return(
                  <th className='tableHeader'>{val}<img src='./tableHeader.png' alt=""/></th>
                  )
                })
              }
          </tr>
        <tbody className='tableBodySection'>
        {props.users.map((val, key) => {
          return (
            <tr key={val.id} className='tableRow' onClick={() => handleTableRowClick(val.id)}>
              <td className='tableRowData'>{val.orgName}</td>
              <td className='tableRowData'>{val.userName}</td>
              <td className='tableRowData'>{val.email}</td>
              <td className='tableRowData'>{val.phoneNumber}</td>
              <td className='tableRowData'>{val.email}</td>
              <td><button style={{backgroundColor: "rgba(57, 205, 87, 0.06)"}} className='statusData'>Active</button> <BsThreeDotsVertical className='iconTable' /></td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default UserDataTableComponent