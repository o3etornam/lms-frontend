import UserProfile from './UserProfile'

function SideBar() {
  return (
    <section className='flex flex-col justify-start w-1/5 gap-8 text-center'>
        <UserProfile username={'Alfred Etornam Klu'} program={'General Science'} />
        <ul className='flex flex-col justify-start align-middle w-full gap-3'>
            <li className='w-1/2 border-solid border-2 border-black ms-14 rounded-lg'>Account</li>
            <li className='w-1/2 border-solid border-2 border-black ms-14 rounded-lg'>Calendar</li>
            <li className='w-1/2 border-solid border-2 border-black ms-14 rounded-lg'>Courses</li>
            <li className='w-1/2 border-solid border-2 border-black ms-14 rounded-lg'>Dasboard</li>
        </ul>
        
    </section>
  )
}

export default SideBar