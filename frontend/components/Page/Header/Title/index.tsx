type Props = {
    title: string,
}

export default function Title({ title }: Props) {
    return (
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800 dark:text-slate-200">{title}</p>
    )
}
