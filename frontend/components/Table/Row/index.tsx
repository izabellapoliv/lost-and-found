import Picture from './Picture'

import type { Item } from '../../../interfaces'
import Title from './Title'
import DateFound from './DateFound'
import Owner from './Owner'
import Actions from './Actions'

type Props = {
    item: Item,
}

export default function Row({ item }: Props) {
    return (
        <>
            <tr className="h-16 border border-gray-100 dark:border-gray-900 rounded">
                <td>
                    <Picture item={item} />
                </td>
                <td className={``}>
                    <Title item={item} />
                </td>
                <td className="pl-24">
                    <DateFound item={item} />
                </td>
                <td className={``}>
                    <Owner item={item} />
                </td>
                <td className="pl-4 flex flex-wrap justify-end">
                    <Actions item={item} />
                </td>
            </tr>
            <tr className="h-3" />
        </>
    )
}
