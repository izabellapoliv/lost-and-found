import { createContext, ReactNode, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { getCookie, setCookie } from 'cookies-next';

type SidebarContextData = {
    query: string | string[] | undefined,
    darkMode: string | boolean,
    toggleDarkMode: (isChecked: boolean) => void,
}

export const SidebarContext = createContext({} as SidebarContextData)

type SidebarContextProviderProps = {
    children: ReactNode
}

export function SidebarContextProvider({ children }: SidebarContextProviderProps) {
    const darkModeCookie = getCookie('darkMode') ?? false;
    const [darkMode, setDarkMode] = useState(darkModeCookie);

    const router = useRouter();
    const { query } = router.query;

    const toggleDarkMode = (isChecked: boolean) => {
        setCookie('darkMode', isChecked);
        setDarkMode(isChecked);
    }

    return (
        <SidebarContext.Provider value={{
            query,
            darkMode,
            toggleDarkMode,
        }}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebar = () => {
    return useContext(SidebarContext);
}
