import type { Item } from '../../../../interfaces'
import { parseDateLocale } from '../../../../utils/date_time'

type Props = {
    item: Item,
}

export default function DateFound({ item }: Props) {
    return (
        <div className="flex items-center text-gray-600 dark:text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm leading-none ml-2">{parseDateLocale(item.date_found)}</p>
        </div>
    )
}
