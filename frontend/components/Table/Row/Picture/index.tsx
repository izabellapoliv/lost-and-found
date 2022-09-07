import Image from 'next/image';
import type { Item } from '../../../../interfaces';

type Props = {
    item: Item,
}

export default function Picture({ item }: Props) {
    if (item.picture == null) {
        return <></>;
    }

    return (
        <div className="ml-5">
            <div className="h-50 flex justify-center items-center">
                <Image src={item.picture}
                    alt={`Picture of ${item.title}`}
                    width={50} height={50} />
            </div>
        </div>
    )
}
