type Props = {
    text: string
}

export default function Helper({ text }: Props) {
    return (
        <p className={`text-gray-600 text-xs italic`}>{text}</p>
    )
}
