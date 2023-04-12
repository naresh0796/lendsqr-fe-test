import React from 'react'
import "../styles/DashboardCard.scss";
import { SlPeople } from "react-icons/sl";
import { IoIosPeople } from "react-icons/io";
import { HiOutlineDocumentText } from "react-icons/hi"
import { HiOutlineCircleStack } from "react-icons/hi2";

const DashboardCard = ({title, count, type}:any) => {

  const renderImage = (type:string) => {
    if (type === "1") {
      return (
        <section className='DashboardCardPinkIcon'>
          <SlPeople />
        </section>
      );
    }
    else if (type === "2") {
      return (
        <section className='DashboardCardPurpleIcon'>
          <IoIosPeople />
        </section>
      );
    }
    else if(type === "3") {
      return (
        <section className='DashboardCardOrangeIcon'>
          <HiOutlineDocumentText />
        </section>
      );
    }
    else{
      return (
        <section className='DashboardCardRedIcon'>
          <HiOutlineCircleStack />
        </section>
      );
    }
  }
  return (
    <div className='DashboardCard'>
      {renderImage(type)}
      <div className='cardtitle'>{title}</div>
      <div className='count'>{count}</div>
    </div>
  )
}

export default DashboardCard;
