import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import FormItem from '../../components/FormItem';
const Content = dynamic(() => import('../../components/Content'), { ssr: false });

export default function Home() {
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const data = {
            title: e.target.title.value,
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }

        const response = await fetch(`api/items`, options)
        if (response.status == 201) {
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
                />
            </Content>
        </>
    )
}
