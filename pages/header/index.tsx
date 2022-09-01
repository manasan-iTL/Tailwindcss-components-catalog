import type { NextPage } from 'next'
import { DefautHeader } from '../../components'

const HeaderPage : NextPage = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>ヘッダーコンポーネント集</h1>
            <DefautHeader />
        </div>
    )
}

export default HeaderPage