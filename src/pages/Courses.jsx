import React from "react";
import Sidebar, { SidebarItem } from "../components/Sidebar";
import {
  NotebookPen,
  UserCircle,
  LayoutDashboard,
  Settings,
  LifeBuoy,
} from "lucide-react";
import { UserProvider } from "../components/UserProvider";
import NavBar from "../components/NavBar";

function Courses() {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        <SidebarItem
          icon={<Settings size={20} />}
          text="Settings"
          to={"/settings"}
        />
      </Sidebar>
      <NavBar />
    </div>
  );
}

export default Courses;
