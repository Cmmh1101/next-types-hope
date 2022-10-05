import React from 'react'
import Leadership from '../../components/aboutUs/Leadership'
import Purpose from '../../components/aboutUs/Purpose'
import ArticleSections from '../../components/ui/ArticleSection'
import Header from '../../components/ui/Header'
import heroImg from '../../public/images/team/voluntarios.jpg'

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <>
      <Header title='About Us' description='About us' image={heroImg} altText='Hope for the nations Venezuela Volunteers group' />
      <ArticleSections>
        <Purpose />
        <Leadership />
      </ArticleSections>
    </>
  )
}

export default AboutUs