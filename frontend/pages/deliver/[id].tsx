import Head from 'next/head'
import { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic';

const Content = dynamic(() => import('../../components/Content'), { ssr: false });
import Form from '../../components/Form'
import Label from '../../components/Form/Label'
import Text from '../../components/Form/Input/Text'
import Submit from '../../components/Form/Submit'
import { Item } from '../../interfaces'

import { getCurrentDate, parseDateLocale } from '../../utils/date_time'

type Props = {
    item: Item,
}

export default function Home({ item }: Props) {
    const router = useRouter()
    const { id } = router.query
    const delivery_date = item?.date_delivered != undefined ? item?.date_delivered : getCurrentDate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const data = {
            title: item.title,
            owner: e.target.owner.value,
            date_delivered: e.target.date_delivered.value,
            is_delivered: true,
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
                <title>Deliver Item</title>
            </Head>

            <Content>
                <Form
                    title='Deliver Item'
                    onSubmit={handleSubmit}
                >
                    <div className={`flex flex-wrap -mx-3 mb-6`}>
                        <div className={`w-full px-3`}>
                            <Label
                                label='Who claimed the lost item?'
                                htmlFor='owner'
                            />
                            <Text id='owner' required={true} defaultValue={item?.owner} />
                            <Label
                                label='What was the delivery date?'
                                htmlFor='date_delivered'
                            />
                            <Text id='date_delivered' required={true} defaultValue={parseDateLocale(delivery_date)} />
                            <div className='pt-5'>
                                <Submit text='Report' />
                            </div>
                        </div>
                    </div>
                </Form>
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
