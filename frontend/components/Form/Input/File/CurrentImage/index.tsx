import Image from "next/image";

type Props = {
    url: string,
}

export default function CurrentImage({ url }: Props) {
    return (
        <div className="h-50 flex justify-left items-center">
            <Image src={url}
                alt={`Current picture`}
                width={150} height={150} />
        </div>
    )
}
