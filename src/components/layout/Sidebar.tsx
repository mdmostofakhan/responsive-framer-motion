import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return(
        <aside className="bg-gray-400 lg:p-5 p-4 h-screen  col-span-2 overflow-auto sticky top-0 left-0">
            <nav className="flex flex-col gap-2">
              <NavLink to="/admin/dashboard" className={ ({isActive}) =>
                cn (`bg-gray-300 flex items-center gap-2  rounded-md p-1 text-white hover:bg-gray-700 hover:text-white transition-all`,

                    {
                        'bg-gray-500 text-white': isActive,
                    }
                   )
                 }>
                <LayoutDashboard className="shrink-0" />
                <span className="truncate">Dashboard</span>
            </NavLink>
              <NavLink to="/admin/add-services" className={ ({isActive}) =>
                cn (`bg-gray-300 flex items-center gap-2  rounded-md p-1 text-white hover:bg-gray-700 hover:text-white transition-all`,

                    {
                        'bg-gray-500 text-white': isActive,
                    }
                   )
                 }>
                
                <LayoutDashboard className="shrink-0" />
                <span className="truncate">Add services</span>
            </NavLink>
              <NavLink to="/admin/services-list" className={ ({isActive}) =>
                cn (`bg-gray-300 flex items-center gap-2  rounded-md p-1 text-white hover:bg-gray-700 hover:text-white transition-all`,

                    {
                        'bg-gray-500 text-white': isActive,
                    }
                   )
                 }>
                
                <LayoutDashboard className="shrink-0" />
                <span className="truncate">Services list</span>
            </NavLink>
            
            
           
            </nav>
        </aside>
    )
}

export default Sidebar;