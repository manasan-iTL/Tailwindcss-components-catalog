import type { NextPage } from 'next'
import { ApplyButton, DefaultButton, FloatButton, GradationButton } from '../../components'

const ButtonPage : NextPage = () => {
    return (
        <div className="container sm:mx-auto">
            <h1 className='text-3xl font-bold text-center'>ボタンコンポーネント集</h1>
            <DefaultButton />
            <GradationButton />
            <FloatButton />
            <ApplyButton />
        </div>
    )
}

export default ButtonPage