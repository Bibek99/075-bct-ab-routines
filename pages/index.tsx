import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Date from '../components/Date'

const Home: NextPage = () => {
  const [title, setTitle] = useState("Class Routine")
  return (
    <>
      <Head>
        <title>{title} - 075BCTAB</title>
      </Head>
      <header className='h-[256px] bg-black p-6'>
        <div className='max-w-5xl flex justify-between items-center'>
          <h2 className='text-slate-50 text-4xl font-medium'>Month</h2>
          <div className='flex grow justify-center'>
            <Date day={10} type="primary" />
            <div></div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Home
