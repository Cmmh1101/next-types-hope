import type { NextPage } from 'next'
import Head from 'next/head'
import HomeIntro from '../components/homePage/HomeIntro'
import Banner from '../components/ui/Banner'
import Header from '../components/ui/Header'
import Heading from '../components/ui/Heading'
import MainSections from '../components/ui/MainSections'
import heroImg from '../public/images/general/hero-image.jpg'
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
        <Header title='Hope For The Nations' description="Blesing our communities with the tools and resources needed to improve their living situation through hope and God's word" buttonText='Go to our programs' image={heroImg} altText="Little kid seated on the steets" />
        <MainSections>
          <Heading title="How is God calling you to..." decoText='Help, Love, Give!' />
          <HomeIntro />
        </MainSections>
        <Banner title='Mission' description='All of our programs are open to communities in need from the children to the elder members. We believe we can make a difference in the lives of children, parents, grandparents and families, to break the circle of poverty in our community.' background={'../../images/team/voluntarios.jpg'} />
      </main>
    </div>
  )
}

export default Home
