import { useSidebar } from '../../contexts/SidebarContext';

type Props = {
    children: JSX.Element,
}

export default function Content({ children }: Props) {
    const { darkMode } = useSidebar();

    return (
        <div className={`flex-col container ${darkMode ? `dark` : ``}`}>
            <div className={`px-6 mx-auto w-full py-10 h-full dark:bg-gray-700`}>
                <div className="w-full h-full rounded">
                    {children}
                </div>
            </div>
        </div>
    )
}
