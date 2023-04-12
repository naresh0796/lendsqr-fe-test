import React, { useState } from 'react'
import { AiOutlineUser, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { User } from './UserDataTableComponent';
import "../styles/UserDetailCard1.scss";

const tabs = ["General Details", "Documents", "Bank Details", "Loans", "Savings", "App and System"];

interface Props {
  userDetails: User,
}

const UserDetailCard1 = (props: any) => {
  const { userDetails } = props;
  const [selectedTab, setSelectedTab] = useState('General Details');

  const handleTabButton = (tab:string) => {
    setSelectedTab(tab);
  }

  return (
    <div className='userDetailCard1Section'>
      <section className='userBasicInfoSection'>
        <div className='logoSection'>
          <AiOutlineUser />
        </div>
        <div className='mainUserInfo'>
          <span className='userNameSection'>
            {
              userDetails?.profile?.firstName
            }
            {" "}
            {
              userDetails?.profile?.lastName
            }
          </span>
          <span className='accountNumberSection'>
            {
              userDetails.accountNumber
            }
          </span>
        </div>
        <div className='verticalDivider'></div>
        <div className='userRatingSection'>
          <span>User's tier</span>
          <section className='starSection'>
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </section>
        </div>
        <div className='verticalDivider'></div>
        <div className='userIncomeInfoSection'>
          <span className='monthlyIncomeSection'>₦{userDetails?.education?.monthlyIncome[0]*1000}</span>
          <span className='bankNameSection'>{userDetails?.profile?.bvn}/ Some Bank</span>
        </div>
      </section>
      <section className='detailsTabSection'>
      {
        tabs.map((tab,index) => {
          return(
            <button onClick={() => handleTabButton(tab)} className={`${tab === selectedTab ? "selectedTabButton" : "tabButton"} tabButton`}>{tab}</button>
          )
        })
      }
      </section>
    </div>
  )
}

export default UserDetailCard1;
