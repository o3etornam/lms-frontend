import React from 'react'
import Sidebar, { SidebarItem } from '../components/Sidebar'
import {
    NotebookPen,
    UserCircle,
    LayoutDashboard,
    Settings,
    LifeBuoy
  } from 'lucide-react'
import { UserProvider } from '../components/UserProvider'

function Courses() {
  return (
    <div>
        <UserProvider>
        <Sidebar>
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help"/>
        <SidebarItem icon={<Settings size={20} />} text="Settings" to={'/settings'}/>
        </Sidebar>
        </UserProvider>
    </div>
  )
}

export default Courses