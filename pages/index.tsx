import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>コンポーネントカタログ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='mt-5'>
        <h1 className='text-2xl font-bold text-center '>Tailwindcssによるコンポーネント集</h1>
        <p>
        <Link href="/button">
          <a className='text-center font-semibold text-blue-400'>
            ボタンコンポーネント集
          </a>
        </Link>
        </p>
        <p>
        <Link href="/header">
          <a className='text-center font-semibold text-blue-400'>
            ヘッダーコンポーネント集
          </a>
        </Link>
        </p>
      </div>
    </div>
  )
}

export default Home
