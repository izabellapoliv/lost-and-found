import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import Table from '../../components/Table';
const Content = dynamic(() => import('../../components/Content'), { ssr: false });
import type { Item } from '../../interfaces';

type Props = {
  items: Item[],
  order: string | string[],
}

export default function Home({ items, order }: Props) {
  return (
    <>
      <Head>
        <title>Lost and Recovered</title>
      </Head>

      <Content>
        <Table
          items={items}
          title={`Lost and recovered :)`}
          order={order}
        />
      </Content>
    </>
  )
}

export async function getServerSideProps(context: GetStaticPropsContext) {
  const { query = '', order = 'date_found' } = context.query;
  const orderAPI = (order == 'date_found') ? `-${order}` : `+${order}`;
  const queryAPI = query != '' ? `&search=${query}` : ``;

  const response = await fetch(`${process.env.API_URL}items?is_delivered=true${queryAPI}&ordering=${orderAPI}`)
  const items = (await response.json()).results;

  // Pass data to the page via props
  return { props: { items, order } }
}
