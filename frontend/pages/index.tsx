import type { NextPage } from 'next'

import Sidebar from '../components/Sidebar'
import Table from '../components/Table'

import type { Item } from '../interfaces'

type Props = {
  items: Item[],
}

const Home: NextPage = ({ items }: Props) => {
  return (
    <div className="flex flex-no-wrap">
      <Sidebar />
      {/* Remove class [ h-64 ] when adding a card block */}
      <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
        {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
        <div className="w-full h-full rounded">
          <Table items={items} />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL}items`)
  const items = await response.json()

  // Pass data to the page via props
  return { props: { items } }
}

export default Home
