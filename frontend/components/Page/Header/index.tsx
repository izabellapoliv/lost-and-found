type Props = {
    children: JSX.Element,
}

export default function Header({ children }: Props) {
    return (
        <div className="px-4 md:px-10 py-4 md:py-7">
            <div className="flex items-center justify-between">
                {children}
            </div>
        </div>
    )
}
