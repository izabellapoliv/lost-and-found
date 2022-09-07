type Props = {
    children: JSX.Element,
}

export default function Body({ children }: Props) {
    return (
        <div className="bg-white dark:bg-gray-700 py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <div className="mt-7 overflow-x-auto">
                {children}
            </div>
        </div>
    )
}
