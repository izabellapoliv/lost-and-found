import { useSidebar } from '../../../contexts/SidebarContext';

export default function Search() {
    const { query } = useSidebar();

    return (
        <div className="flex justify-center mt-48 mb-4 w-full">
            <form>
                <div className="relative">
                    <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={10} cy={10} r={7} />
                            <line x1={21} y1={21} x2={15} y2={15} />
                        </svg>
                    </div>
                    <input type="text"
                        className="bg-gray-700 focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-100 pl-10 py-2"
                        placeholder="Search"
                        name="query"
                        defaultValue={query}
                    />
                </div>
                <input type={`submit`} className={`invisible`} />
            </form>
        </div>
    )
}
