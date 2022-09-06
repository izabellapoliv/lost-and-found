import Link from 'next/link';

type Props = {
    href: string,
    currentPage: string,
    children: JSX.Element,
}

export default function Item({ href, currentPage, children }: Props) {
    return (
        <li className={`w-full ${currentPage == href ? 'text-gray-300' : 'text-gray-600'} hover:text-gray-500 cursor-pointer mb-6`}>
            <Link href={href}>
                <a className={`items-center flex justify-between`}>
                    {children}
                </a>
            </Link>
        </li>
    )
}
