export default function Actions() {
    return (
        <div className="sm:flex items-center justify-between">
            <button className="mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                <p className="text-sm font-medium leading-none text-white">Add Task</p>
            </button>
            <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                <p>Sort By:</p>
                <select className="focus:outline-none bg-transparent ml-1">
                    <option className="text-sm text-indigo-800" value={`date_found`}>Latest</option>
                    <option className="text-sm text-indigo-800" value={`title`}>Title</option>
                </select>
            </div>
        </div>
    )
}
