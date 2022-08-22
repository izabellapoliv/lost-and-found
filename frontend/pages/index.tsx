import Head from 'next/head'

import Sidebar from '../components/Sidebar'
import Table from '../components/Table'

import type { Item } from '../interfaces'

type Props = {
  items: Item[],
}

export default function Home({ items }: Props) {
  return (
    <>
      <div className="flex flex-no-wrap">
        <Head>
          <title>Lost and Found</title>
        </Head>

        <Sidebar />
        {/* Remove class [ h-64 ] when adding a card block */}
        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
          {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
          <div className="w-full h-full rounded">
            <Table
              items={items}
              title={`Lost and Found (but still not recovered)`}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL}items?is_delivered=false`)
  const items = await response.json()

  // Pass data to the page via props
  return { props: { items } }
}
