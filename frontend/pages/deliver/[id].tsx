import Head from 'next/head'
import { useRouter } from 'next/router'
import FormItem from '../../components/FormItem'

import Sidebar from '../../components/Sidebar'

export default function Home() {
    const router = useRouter()
    const { id } = router.query

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const data = {
            owner: e.target.owner.value,
            date_found: e.target.date_found.value,
        }

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }

        const response = await fetch(`api/items/${id}`, options)
        if (response.status == 200) {
            router.push(`/`)
        }
    }

    return (
        <>
            <div className="flex flex-no-wrap">
                <Head>
                    <title>Report Lost</title>
                </Head>

                <Sidebar />
                {/* Remove class [ h-64 ] when adding a card block */}
                <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
                    {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                    <div className="w-full h-full rounded">
                        <FormItem
                            handleSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
