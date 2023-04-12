import React from 'react'
import "../styles/UserDetailCard2.scss";

const UserDetailCard2 = (props: any) => {
  const { userDetails } = props;
  return (
    <div className='userDetailCard2Section'>
      <section className='userDetailCard2Subsection'>
        <span className='subSectionTitle'>Personal Information</span>
        <section className='subSectionList'>
          <div className='singleDetail'>
            <span className='singleDetailTitle'>Full Name</span>
            <span className='singleUserDetail'>{userDetails?.profile?.firstName} {userDetails?.profile?.lastName}</span>
          </div>
          <div className='singleDetail'>
            <span className='singleDetailTitle'>Phone number</span>
            <span className='singleUserDetail'>{userDetails?.profile?.phoneNumber}</span>
          </div>
          <div className='singleDetail'>
            <span className='singleDetailTitle'>Email Address</span>
            <span className='singleUserDetail'>{userDetails?.email}</span>
          </div>
          <div className='singleDetail'>
            <span className='singleDetailTitle'>Bvn</span>
            <span className='singleUserDetail'>{userDetails?.profile?.bvn} </span>
          </div>
          <div className='singleDetail'>
            <span className='singleDetailTitle'>Gender</span>
            <span className='singleUserDetail'>{userDetails?.profile?.gender}</span>
          </div>
          <div className='singleDetail'>
            <span className='singleDetailTitle'>Address</span>
            <span className='singleUserDetail'>{userDetails?.profile?.address}</span>
          </div>
        </section>
  
      </section>
      <section className='horizontalDivider'></section>
      <section className='userDetailCard2Subsection'>
        <span className='subSectionTitle'>Education and Employment</span>
        <section className='subSectionList'>
          <div className='singleDetail'>
            <span className='singleDetailTitle'>level of education</span>
            <span className='singleUserDetail'>{userDetails?.education?.level}</span>
          </div>
          <div className='singleDetail'>
            <span className='singleDetailTitle'>employment status</span>
            <span className='singleUserDetail'>{userDetails?.education?.employmentStatus}</span>
          </div>
          <div className='singleDetail'>
            <span className='singleDetailTitle'>sector of employment</span>
            <span className='singleUserDetail'>{userDetails?.education?.sector}</span>
          </div>
          <div className='singleDetail'>
            <span className='singleDetailTitle'>Duration of employment</span>
            <span className='singleUserDetail'>{userDetails?.education?.duration}</span>
          </div>
          <div className='singleDetail'>
            <span className='singleDetailTitle'>office email</span>
            <span className='singleUserDetail'>{userDetails?.education?.officeEmail}</span>
          </div>
          <div className='singleDetail'>
            <span className='singleDetailTitle'>Monthly income</span>
            <span className='singleUserDetail'>{userDetails?.education?.monthlyIncome[0]}-{userDetails?.education?.monthlyIncome[1]}</span>
          </div>
          <div className='singleDetail'>
            <span className='singleDetailTitle'>loan repayment</span>
            <span className='singleUserDetail'>{userDetails?.education?.loanRepayment}</span>
          </div>
        </section>
  
      </section>
      <section className='horizontalDivider'></section>
      <section className='userDetailCard2Subsection'>
        <span className='subSectionTitle'>Socials</span>
        <section className='subSectionList'>
          <div className='singleDetail'>
            <span className='singleDetailTitle'>Twitter</span>
            <span className='singleUserDetail'>{userDetails?.socials?.facebook}</span>
          </div>
          <div className='singleDetail'>
            <span className='singleDetailTitle'>Facebook</span>
            <span className='singleUserDetail'>{userDetails?.socials?.instagram}</span>
          </div>
          <div className='singleDetail'>
            <span className='singleDetailTitle'>Instagram</span>
            <span className='singleUserDetail'>{userDetails?.socials?.twitter}</span>
          </div>
        </section>
      </section>
      <section className='horizontalDivider'></section>
      <section className='userDetailCard2Subsection'>
        <span className='subSectionTitle'>Guarantor</span>
        <section className='subSectionList'>
          <div className='singleDetail'>
            <span className='singleDetailTitle'>Full Name</span>
            <span className='singleUserDetail'>{userDetails?.guarantor?.firstName} {userDetails?.guarantor?.lastName}</span>
          </div>
          <div className='singleDetail'>
            <span className='singleDetailTitle'>Phone number</span>
            <span className='singleUserDetail'>{userDetails?.guarantor?.phoneNumber}</span>
          </div>
          <div className='singleDetail'>
            <span className='singleDetailTitle'>Address</span>
            <span className='singleUserDetail'>{userDetails?.guarantor?.address}</span>
          </div>
          <div className='singleDetail'>
            <span className='singleDetailTitle'>Gender</span>
            <span className='singleUserDetail'>{userDetails?.guarantor?.gender}</span>
          </div>
        </section>
      </section>
    </div>
  )
}

export default UserDetailCard2;
