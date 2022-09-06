import { useRef } from "react";
import Link from "next/link";

type Props = {
    order: string | string[],
}

export default function Actions({ order }: Props) {
    const selectForm = useRef(null);
    const handleChange = () => {
        selectForm.current?.submit();
    }

    return (
        <div className="sm:flex items-center justify-between">
            <Link href={`report-lost`}>
                <a className="mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                    <p className="text-sm font-medium leading-none text-white">Report lost item</p>
                </a>
            </Link>
            <form
                ref={selectForm}>
                <select id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleChange}
                    name="order"
                    defaultValue={order}>
                    <option value={`date_found`}>Sort by date</option>
                    <option value={`title`}>Sort by title</option>
                </select>
            </form>
        </div>
    )
}
