import Link from 'next/link'

export default function Desktop() {
    return (
        <ul className="mt-12">
            <li className="w-full text-gray-300 hover:text-gray-500 cursor-pointer mb-6">
                <Link href={`/`}>
                    <a className={`items-center flex justify-between`}>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                            </svg>
                            <span className="text-sm  ml-2">Not recovered yet :/</span>
                        </div>
                        <div className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">5</div>
                    </a>
                </Link>
            </li>
            <li className="w-full text-gray-600 hover:text-gray-500 cursor-pointer mb-6">
                <Link href={`/recovered`}>
                    <a className={`items-center flex justify-between`}>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                            <span className="text-sm  ml-2">Items recovered :)</span>
                        </div>
                        <div className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">8</div>
                    </a>
                </Link>
            </li>
        </ul>
    )
}
