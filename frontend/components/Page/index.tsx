type Props = {
    children: JSX.Element,
}

export default function Page({ children }: Props) {
    return (
        <>
            <div>
                <div className="sm:px-6 w-full">
                    {children}
                </div>
            </div>
        </>
    )
}
