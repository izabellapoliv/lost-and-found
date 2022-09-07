import { useSidebar } from '../../contexts/SidebarContext';

type Props = {
    children: JSX.Element,
}

export default function Content({ children }: Props) {
    const { darkMode } = useSidebar();

    return (
        <div className={`container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6 ${darkMode ? `dark` : ``}`}>
            {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
            <div className="w-full h-full rounded">
                {children}
            </div>
        </div>
    )
}
