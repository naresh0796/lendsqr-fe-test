import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import SideBarComponent from '../components/SideBarComponent';
import UserDetailCard1 from '../components/UserDetailCard1';
import { HiArrowNarrowLeft } from "react-icons/hi";
import "../styles/UserDetail.scss";
import UserDetailCard2 from '../components/UserDetailCard2';

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState({});
  let params = useParams();
  const navigate = useNavigate();
  const FetchUserDetails = async(id:any) => {
    const data = await fetch(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
    );

    const detailData = await data.json();
    console.log(detailData);
    setUserDetails(detailData);
  };

  useEffect(() => {
    FetchUserDetails(params?.id);
  }, [params.id]);

  const handleBackButton = () => {
    navigate("/dashboard");
  }

  return (
    <div className='userDetailSection'>
      <HeaderComponent />
      <SideBarComponent />
      <section className='mainsSection'>
        <button onClick={handleBackButton} className='backButton'>
          <HiArrowNarrowLeft />
          <span >Back to Users</span>
        </button>
        <section className='userInfoSection'>
          <span className='userDetailsTitle'>User Details</span>
          <button className='blackListUserButton'>Blacklist User</button>
          <button className='activateUserButton'>Activate User</button>
        </section>
        <UserDetailCard1 userDetails={userDetails}/>
        <UserDetailCard2 userDetails={userDetails} />
      </section>
    </div>
  )
}

export default UserDetails;
