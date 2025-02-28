import { createContext, useState } from "react";
import useWindowResize from "../hooks/useWindowresize";

export const toggleSideMenuContext = createContext();

export const SideMenuProvider = ({children}) => {

    const enableSideMenu = useWindowResize('375');

    const [open, setOpen] = useState(enableSideMenu);

    <toggleSideMenuContext.Provider value={{open, setOpen}}>
        {children}
    </toggleSideMenuContext.Provider>

}

