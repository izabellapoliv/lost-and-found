import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import FormItem from '../../components/FormItem';
const Content = dynamic(() => import('../../components/Content'), { ssr: false });

import type { Item } from '../../interfaces';

type Props = {
    item: Item,
}

export default function Home({ item }: Props) {
    const router = useRouter()
    const { id } = router.query

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const data = {
            title: e.target.title.value,
        }

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }

        const response = await fetch(`/api/items/${id}`, options)
        if (response.status == 200) {
            router.push(`/`)
        }
    }

    return (
        <>
            <Head>
                <title>Report Lost</title>
            </Head>

            <Content>
                <FormItem
                    handleSubmit={handleSubmit}
                    item={item}
                />
            </Content>
        </>
    )
}

export async function getServerSideProps(context: GetStaticPropsContext) {
    const { id } = context.params
    const response = await fetch(`${process.env.API_URL}items/${id}`)
    const item = await response.json()

    // Pass data to the page via props
    return { props: { item } }
}
