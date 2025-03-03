import { useState, createContext } from "react";

export const SideMenuContext = createContext(null);

export const SideMenuProvider = ({children}) => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <SideMenuContext.Provider value={{ menuOpen, setMenuOpen }}>
            {children}
        </SideMenuContext.Provider>
    )

};