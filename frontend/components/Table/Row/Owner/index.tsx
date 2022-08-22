import { parseDateLocale } from '../../../../utils/date_time'
import type { Item } from '../../../../interfaces'

type Props = {
    item: Item,
}

export default function Owner({ item }: Props) {
    return (
        item.owner != '' ?
            <div className="flex items-center pl-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="text-sm leading-none text-gray-600 ml-2">
                    <span>{item.owner}</span>
                    <br />
                    <span className="mt-5">{parseDateLocale(item.date_delivered)}</span>
                </p>
            </div> :
            <></>
    )
}
