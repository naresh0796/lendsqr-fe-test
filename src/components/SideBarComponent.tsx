import React from 'react'
import "../styles/SideBar.scss"

const Customers = [
  {
    label: "Users",
    image: "https://landsquare.s3.amazonaws.com/users+1.png",
  }
  ,
  {
    label: "Guarantors",
    image: 'https://landsquare.s3.amazonaws.com/users+1.png',
  },
  {
    label: "Loans",
    image: 'https://landsquare.s3.amazonaws.com/sack+1.png',

  },

  {
    label: "Decision Models",
    image: 'https://landsquare.s3.amazonaws.com/handshake-regular+1.png',

  },

  {
    label: "Savings",
    image: 'https://landsquare.s3.amazonaws.com/piggy-bank+1.png',

  },

  {
    label: "Loan Request",
    image: 'https://landsquare.s3.amazonaws.com/handshake-regular+1.png',

  },

  {
    label: "WhiteList",
    image: 'https://landsquare.s3.amazonaws.com/user-check+1.png',

  },

  {
    label: "Karma",
    image: 'https://landsquare.s3.amazonaws.com/user-times+1.png',

  },
]
const Settings = [

  {
    label: "Preferences",
    image: 'https://landsquare.s3.amazonaws.com/sliders-h+1.png',

  },

  {
    label: "Fees and Pricing",
    image: 'https://landsquare.s3.amazonaws.com/badge-percent+1.png',

  },

  {
    label: "Audit Logs",
    image: 'https://landsquare.s3.amazonaws.com/chart-bar+2.png',

  },

]
const Businesses = [

  {
    label: "Organization",
    image: 'https://landsquare.s3.amazonaws.com/briefcase+1-1.png',
  },


  {
    label: "Loan and Products",
    image: 'https://landsquare.s3.amazonaws.com/handshake-regular+1.png',
  },

  {
    label: "Savings and Products",
    image: 'https://landsquare.s3.amazonaws.com/np_bank_148501_000000+1.png',
  },

  {
    label: "Fees and Charges",
    image: 'https://landsquare.s3.amazonaws.com/coins-solid+1.png',
  },

  {
    label: "Transactions",
    image: 'https://landsquare.s3.amazonaws.com/icon.png',

  },

  {
    label: "Services",
    image: 'https://landsquare.s3.amazonaws.com/galaxy+1.png',

  },

  {
    label: "Service Account",
    image: 'https://landsquare.s3.amazonaws.com/user-cog+1.png',

  },

  {
    label: "Settlements",
    image: 'https://landsquare.s3.amazonaws.com/scroll+1.png',

  },

  {
    label: "Reports",
    image: 'https://landsquare.s3.amazonaws.com/chart-bar+2.png',

  },
]

const SideBarComponent = () => {
  return (
    <div className='sideBarSection scrollbar-hide'>
      <section className='topSection'>

        <span className='organizationTitle'>
          <img style={{ height: '15px', paddingRight: '5px' }} src={require('../assets/icons/briefcase.png')} alt="" />
          Switch Organization

          <img style={{ height: '15px', paddingLeft: '5px' }} src={require('../assets/icons/downarrow.png')} alt="" />
        </span>

        <span className='title'>
          <img style={{ height: '15px', paddingRight: '5px' }} src={require('../assets/icons/home.png')} alt="" />
          Dashboard</span>
      </section>
      <section className='middleSection'>
        <span className='mainListTitle'>
          Customers
        </span>
        <section className='list'>
          {
            Customers.map((item) => {
              return (
                <span className='title'>
                  <img style={{ height: '15px', paddingRight: '5px' }} src={item.image} alt="" />
                  {item.label}</span>
              )
            })
          }
        </section>
      </section>
      <section className='middleSection'>
        <span className='mainListTitle'>
          Businesses
        </span>
        <section className='list'>
          {
            Businesses.map((item) => {
              return (

                <span className='title'>
                  <img style={{ height: '15px', paddingRight: '5px' }} src={item.image} alt="" />
                  {item.label}</span>
              )
            })
          }
        </section>
      </section>
      <section className='middleSection'>
        <span className='mainListTitle'>
          Settings
        </span>
        <section className='list'>
          {
            Settings.map((item) => {
              return (
                <span className='title'>
                  <img style={{ height: '15px', paddingRight: '5px' }} src={item.image} alt="" />
                  {item.label}</span>
              )
            })
          }
        </section>
      </section>
    </div>
  )
}

export default SideBarComponent