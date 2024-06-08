import '../App.css'
import Hero from '../components/Hero'
import SideBar from '../components/SideBar'




function HomePage() {

  return (
    <div className='flex max-w-screen-xl mx-auto my-0 h-dvh'>
    <SideBar />
    <Hero />
    </div>
  )
}

export default HomePage
