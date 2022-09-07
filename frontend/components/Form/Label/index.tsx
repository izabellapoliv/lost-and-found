type Props = {
    label: string,
    htmlFor: string
}

export default function Label({ label, htmlFor }: Props) {
    return (
        <label className={`block uppercase tracking-wide text-gray-700 dark:text-slate-300 text-xs font-bold mb-2`} htmlFor={htmlFor}>
            {label}
        </label>
    )
}
