import type { Item } from '../../../../interfaces'

type Props = {
    item: Item,
}

export default function Title({ item }: Props) {
    return <div className="flex items-center pl-5">
        <p className="text-base font-medium leading-none text-gray-700 mr-2">{item.title}</p>
    </div>
}
