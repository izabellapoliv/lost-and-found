
import Form from '../../components/Form'
import Label from '../../components/Form/Label'
import Helper from '../../components/Form/Helper'
import Text from '../../components/Form/Input/Text'
import Submit from '../../components/Form/Submit'
import { Item } from '../../interfaces'

type Props = {
    item?: Item,
    handleSubmit: React.FormEventHandler,
}

export default function FormItem({ item, handleSubmit }: Props) {
    return (
        <Form
            title='Report Lost'
            onSubmit={handleSubmit}
        >
            <div className={`flex flex-wrap -mx-3 mb-6`}>
                <div className={`w-full px-3`}>
                    <Label
                        label='What did you find?'
                        htmlFor='title'
                    />
                    <Text id='title' required={true} defaultValue={item?.title} />
                    <Helper
                        text='Try to give it a descriptive name so that other people can recognize it more easily later :)'
                    />
                    <div className='pt-5'>
                        <Submit text='Report' />
                    </div>
                </div>
            </div>
        </Form>
    )
}
