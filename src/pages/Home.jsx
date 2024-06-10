import '../App.css'
import Hero from '../components/Hero'
import Sidebar from '../components/Sidebar'
import { SidebarItem } from '../components/Sidebar'
import {
  NotebookPen,
  UserCircle,
  LayoutDashboard,
  Settings,
  LifeBuoy
} from 'lucide-react'
import { UserProvider } from '../components/UserProvider'



function HomePage() {

  return (
    <div className='flex max-w-screen-xl mx-auto my-0 h-dvh'>
    <UserProvider>
    <Sidebar>
    <SidebarItem icon={<UserCircle size={20} />} text="Account"/>
      <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active to={'/login'}/>
      <SidebarItem icon={<NotebookPen size={20} />} text="Courses" to={'/courses'}/>
      <SidebarItem icon={<LifeBuoy size={20} />} text="Help"/>
      <SidebarItem icon={<Settings size={20} />} text="Settings" to={'/settings'}/>
    </Sidebar>
    </UserProvider>
    <Hero />
    </div>
  )
}

export default HomePage
