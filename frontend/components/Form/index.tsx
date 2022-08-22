import Page from '../Page'
import Header from '../Page/Header'
import Title from '../Page/Header/Title'
import Body from '../Page/Body'

type Props = {
    title: string,
    children: JSX.Element,
    onSubmit: React.FormEventHandler,
}

export default function Form({ title, children, onSubmit }: Props) {
    return (
        <Page>
            <>
                <Header>
                    <>
                        <Title title={title} />
                    </>
                </Header>
                <Body>
                    <form className={`w-full max-w-lg`} onSubmit={onSubmit}>
                        {children}
                    </form>
                </Body>
            </>
        </Page>
    )
}
