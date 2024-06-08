import React from 'react'

function UserProfile({username, program}) {
  return (
    <div>
        <div></div>
        <h2 className='text-2xl'>{username}</h2>
        <p>{program}</p>
    </div>
  )
}

export default UserProfile