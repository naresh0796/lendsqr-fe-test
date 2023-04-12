import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import SideBarComponent from '../components/SideBarComponent'
import UserDataTableComponent from '../components/UserDataTableComponent'
import UserInfoCard from '../components/DashboardCard'
import "../styles/Dashboard.scss"

const Dashboard = () => {
  const [userList, setUserList] = useState([]);

  const getAllUsers = async() => {
    const check = localStorage.getItem("userList");
    if (check){
      setUserList(JSON.parse(check));
      console.log(JSON.parse(check));
    } else {
      const response = await axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users");
      localStorage.setItem("userList", JSON.stringify(response.data));
      setUserList(response.data);
      console.log(response.data);
    }
  }

  useEffect(() =>{
    getAllUsers();
  },[])

  return (
    <div className='dashboardSection'>
      <HeaderComponent />
      <SideBarComponent />
      <section className='mainSection'>
        <span className='usersTitle'>
          Users
        </span>
        <section className='userCardSection'>
          <UserInfoCard title="Users" count="2,453" type="1"/>
          <UserInfoCard title="Active Users" count="2,453" type="2" />
          <UserInfoCard title="Users with Loans" count="12,453" type="3" />
          <UserInfoCard title="Users with Savings" count="102,453" type="4" />
        </section>
        <section className='userTableSection'>
          <UserDataTableComponent users={userList} />
        </section>
      </section>
    </div>
  )
}

export default Dashboard;
