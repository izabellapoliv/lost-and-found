import Page from '../Page'
import Header from '../Page/Header'
import Title from '../Page/Header/Title'
import Body from '../Page/Body'

import Actions from './Actions'
import Row from './Row'

import type { Item } from '../../interfaces'

type Props = {
    items: Item[],
    title: string,
}

export default function Table({ items, title }: Props) {
    return (
        <Page>
            <>
                <Header>
                    <>
                        <Title title={title} />
                        <Actions />
                    </>
                </Header>
                <Body>
                    <table className="w-full whitespace-nowrap">
                        <tbody>
                            {
                                items.map(each => {
                                    return (
                                        <Row key={each.id} item={each} />
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </Body>
            </>
        </Page>
    )
}
