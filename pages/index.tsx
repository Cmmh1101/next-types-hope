import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/ui/Header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hope For The Nations</title>
        <meta name="description" content="Non-profit organization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title='Hope For The Nations' description="Blesing our communities with the tools and resources needed to improve their living situation through hope and God's word" buttonText='Go to our programs' />
      </main>
    </div>
  )
}

export default Home
