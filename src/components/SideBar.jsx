import React from 'react'
import UserProfile from './UserProfile'

function SideBar() {
  return (
    <section className='sidebar'>
        <UserProfile username={'Alfred Etornam Klu'} program={'General Science'} />
        <ul>
            <li>Account</li>
            <li>Calendar</li>
            <li>Courses</li>
            <li>Dasboard</li>
        </ul>
        
    </section>
  )
}

export default SideBar