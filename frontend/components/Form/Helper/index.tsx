type Props = {
    text: string
}

export default function Helper({ text }: Props) {
    return (
        <p className={`text-gray-600 dark:text-slate-400 text-xs italic`}>{text}</p>
    )
}
