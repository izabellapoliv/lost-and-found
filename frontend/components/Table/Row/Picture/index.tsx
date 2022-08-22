export default function Picture() {
    return (
        <div className="ml-5">
            <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                <div className="check-icon  bg-indigo-700 text-white rounded-sm">
                    <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M5 12l5 5l10 -10" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
