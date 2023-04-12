import React from 'react'
import SearchBarComponent from './SearchBarComponent';
import '../styles/Header.scss'
import { Link } from "react-router-dom";
import { BsBell } from "react-icons/bs";

const HeaderComponent = () => {
  return (
    <div className='headerSection'>
      <section className='imageSection'>
        <img src='/Union.png' alt='union' />
        <img src='/lendsqr.png' alt='logo' />
      </section>
      <SearchBarComponent />
      <section className='rightSection'>
        <Link to="/" className='docLink'>Docs</Link>
        <BsBell className='icon'/>
        <img src='/image 4.png' alt='pic' className='headerUserPicture'/>
        <span className='headerUserName'>Adedeji</span>
      </section>
    </div>
  )
}

export default HeaderComponent;
