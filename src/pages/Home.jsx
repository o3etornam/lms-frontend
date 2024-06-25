import "../App.css";
import CalendarDemo from "../components/Calendar";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import { SidebarItem } from "../components/Sidebar";
import {
  CalendarDays,
  UserCircle,
  LayoutDashboard,
  Settings,
  LifeBuoy,
} from "lucide-react";

function HomePage() {
  return (
    <>
      <div className="flex">
        <Sidebar>
          <SidebarItem icon={<UserCircle size={20} />} text="Profile" />
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            active
            to={"/"}
          />
          <SidebarItem
            icon={<CalendarDays size={20} />}
            text="Calendar"
            to={"/calendar"}
          />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
          <SidebarItem
            icon={<Settings size={20} />}
            text="Settings"
            to={"/settings"}
          />
        </Sidebar>
        <div className=" flex-1 flex flex-col">
          <NavBar />
          <div className="flex">
            <Hero />
            <div className="w-1/3">
              <CalendarDemo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
